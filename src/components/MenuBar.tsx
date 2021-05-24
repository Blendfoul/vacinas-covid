import React, {useState} from "react";
import {AppBar, createStyles, Divider, Drawer, IconButton, makeStyles, Toolbar} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DrawerContent from "./DrawerContent";
import CovidContext from "../store/CovidContext";
import {playSound} from "../hooks/soundHook";
import {VolumeOff, VolumeUp} from "@material-ui/icons";
import {NavLink} from "react-router-dom";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    link: {
      textEmphasis: undefined,
      textDecoration: 'none',
      "&:hover": {
        textDecoration: 'underline',
        color: theme.palette.secondary.main
      },
      color: theme.palette.primary.contrastText
    },
    sound: {
      marginLeft: 'auto',
      color: theme.palette.secondary.main
    },
    logo: {
      objectFit: 'contain',
      objectPosition: 'center',
      resizeMode: 'contain'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      height: 70,
      backgroundColor: theme.palette.primary.dark
    }
  }));

const MenuBar: React.FC<any> = () => {
  const classes = useStyles();
  const [open, setOpen]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false as boolean);

  const toggleDrawer = () => setOpen(open => !open);

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar>
          <CovidContext.Consumer>
            {
              ({enabled, setEnabled}) => (
                <>
                  <IconButton edge="start" color="inherit"
                              aria-label="menu" onClick={toggleDrawer}
                              onMouseEnter={() => enabled ? playSound('/sounds/menu.mp3') : null}>
                    <MenuIcon/>
                  </IconButton>
                  <NavLink to={'/'} className={classes.link}>
                    <img src={'/logo.png'} alt={'Vacinas Covid'} className={classes.logo}/>
                  </NavLink>
                  <IconButton className={classes.sound} onClick={() => setEnabled ? setEnabled(!enabled) : null}>
                    {enabled ? <VolumeUp/> : <VolumeOff/>}
                  </IconButton>
                </>
              )
            }
          </CovidContext.Consumer>
        </Toolbar>
      </AppBar>
      <Drawer anchor={'left'} open={open} onClose={toggleDrawer}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon color={'secondary'}/>
          </IconButton>
          <img src={'/logo.png'} alt={'Vacinas Covid'} className={classes.logo}/>
        </div>
        <Divider color={'secondary'}/>
        <DrawerContent toggle={toggleDrawer}/>
      </Drawer>
    </React.Fragment>
  );
};

export default MenuBar;
