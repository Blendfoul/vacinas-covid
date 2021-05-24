import React from "react";
import CovidContext from "../../store/CovidContext";
import {createStyles, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import {NavLink, useLocation} from "react-router-dom";
import {useSound} from "../../hooks/soundHook";
import PinDropIcon from "@material-ui/icons/PinDrop";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import InfoIcon from "@material-ui/icons/Info";
import {CalendarToday, Contacts} from "@material-ui/icons";

interface DrawerItemProps {
  item: {name: string, icon: string, route: string, audio: string};
  toggle: () => void;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    list: {
      width: 250,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      height: '100%'
    },
    link: {
      textEmphasis: undefined,
      textDecoration: 'none',
      "&:hover": {
        textDecoration: undefined
      },
      color: 'inherit'
    },
    item: {
      color: theme.palette.primary.contrastText,
    },
    itemSelected: {
      color: theme.palette.secondary.main
    }
  }));


const DrawerItem: React.FC<DrawerItemProps> = ({item, toggle}) => {
  const classes = useStyles();
  const location = useLocation();
  const {sound} = useSound(item.audio);

  const iconSelect = (name: string) => {
    switch (name) {
      case 'location_on':
        return <PinDropIcon/>;
      case 'trending_up':
        return <TrendingUpIcon/>;
      case 'feed':
        return <AnnouncementIcon/>;
      case 'info':
        return <InfoIcon/>;
      case 'calendar':
        return <CalendarToday />;
      case 'contacts':
        return <Contacts />
      default:
        return null;
    }
  }

  function stopSound() {
    sound!.pause();
    sound!.currentTime = 0;
  }

  function startSound() {
    sound!.play();
  }

  return (
    <NavLink to={item.route} className={classes.link} onClick={toggle}>
      <CovidContext.Consumer>
        {({enabled}) => (
          <ListItem button selected={item.route === location.pathname}
                    className={item.route === location.pathname ? classes.itemSelected : classes.item}
                    onMouseEnter={() => enabled ? startSound() : null}
                    onMouseLeave={() => enabled ? stopSound() : null}>
            <ListItemIcon className={item.route === location.pathname ? classes.itemSelected : classes.item}>
              {iconSelect(item.icon)}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        )}
      </CovidContext.Consumer>
    </NavLink>
  );
}

export default DrawerItem;
