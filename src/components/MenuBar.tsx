import React, {useState} from "react";
import {AppBar, createStyles, Drawer, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DrawerContent from "./DrawerContent";
import CovidContext from "../store/CovidContext";
import {playSound} from "../hooks/soundHook";
import {VolumeOff, VolumeUp} from "@material-ui/icons";
import {NavLink} from "react-router-dom";

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
                    <Typography variant="h5" className={classes.title}>
                      Vacinas Covid
                    </Typography>
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
        <DrawerContent/>
      </Drawer>
    </React.Fragment>
  );
};

export default MenuBar;
