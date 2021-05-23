import React from "react";
import {CircularProgress, createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh'
  }
}));

const LoadingPage: React.FC<any> = () => {
  const classes = useStyles();
  return(
    <div className={classes.container}>
      <CircularProgress color={'secondary'} size={50}/>
    </div>
  );
};

export default LoadingPage;
