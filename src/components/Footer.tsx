import React from "react";
import {createStyles, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: theme.palette.primary.main,
      paddingVertical: 10,
      flexDirection: 'column'
    },
    text: {
      textAlign: 'center',
      color: theme.palette.primary.contrastText
    },
    brand: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBlock: 10
    }
  }));

const Footer: React.FC<any> = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.brand}>
        <Typography variant={'caption'} className={classes.text}>2021 Vacinas Covid</Typography>
      </div>
    </footer>
  );
};

export default Footer;
