import React from "react";
import {createStyles, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: theme.palette.primary.main,
    paddingVertical: 20
  },
    text: {
    textAlign: 'center',
      color: theme.palette.primary.contrastText
    }
}));

const Footer: React.FC<any> = () => {
  const classes = useStyles();

  return <footer className={classes.footer}>
    <Typography className={classes.text} variant={'h5'}>Footer</Typography>
  </footer>;
};

export default Footer;
