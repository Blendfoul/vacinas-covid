import React from 'react';
import {createStyles, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import {NavLink, useLocation} from 'react-router-dom';
import PinDropIcon from '@material-ui/icons/PinDrop';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import InfoIcon from '@material-ui/icons/Info';
import * as content from '../assets/content.json';
import {CalendarToday, Contacts} from "@material-ui/icons";
import CovidContext from "../store/CovidContext";
import {playSound} from "../hooks/soundHook";

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

interface DrawerContentProps {
  toggle: () => void;
}

const DrawerContent: React.FC<DrawerContentProps> = ({toggle}) => {
  const classes = useStyles();
  const location = useLocation();

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

  return (
    <div className={classes.list}>
      {
        content.list.map((item, index) => (
          <NavLink to={item.route} className={classes.link} key={`drawer-${index}`} onClick={toggle}>
            <CovidContext.Consumer>
              {({enabled}) => (
                <ListItem button selected={item.route === location.pathname}
                          className={item.route === location.pathname ? classes.itemSelected : classes.item}
                          onMouseEnter={() => enabled ? playSound(item.audio): null}>
                  <ListItemIcon className={item.route === location.pathname ? classes.itemSelected : classes.item}>
                    {iconSelect(item.icon)}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              )}
            </CovidContext.Consumer>

          </NavLink>
        ))
      }
    </div>
  )
};

export default DrawerContent;
