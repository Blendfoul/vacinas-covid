import React from 'react';
import {createStyles, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import PinDropIcon from '@material-ui/icons/PinDrop';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';


import * as content from '../assets/content.json';

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      width: 250,
    },
    link: {
      textEmphasis: undefined,
      textDecoration: 'none',
      "&:hover": {
        textDecoration: undefined
      },
      color: 'inherit'
    }
  }));

const DrawerContent: React.FC<any> = () => {
  const classes = useStyles();

  const iconSelect = (name: string) => {
    switch (name) {
      case 'location_on':
        return <PinDropIcon/>;
      case 'trending_up':
        return <TrendingUpIcon/>;
      case 'home':
        return <HomeIcon/>;
      case 'info':
        return <InfoIcon/>;
      default:
        return null;
    }
  }

  return (
    <div className={classes.list}>
      {
        content.list.map((item, index) => (
          <NavLink to={`/${item.route}`} className={classes.link}>
            <ListItem button key={`drawer-${index}`}>
              <ListItemIcon>
                {iconSelect(item.icon)}
              </ListItemIcon>
              <ListItemText primary={item.name}/>
            </ListItem>
          </NavLink>

        ))
      }
    </div>
  )
};

export default DrawerContent;
