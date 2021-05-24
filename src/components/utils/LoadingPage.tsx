import React from "react";
import {createStyles, LinearProgress, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '70vh'
  },
  progress: {
    width: 150,
    height: 10,
    borderRadius: 5
  }
}));

interface LoadingProps {
  data?: string;
}

const LoadingPage: React.FC<LoadingProps> = ({data = ''}) => {
  const classes = useStyles();
  return(
    <div className={classes.container}>
      <img src="/ico.png" alt="" />
      <LinearProgress color={'secondary'} variant={'indeterminate'} className={classes.progress}/>
      <Typography color={'secondary'} variant={'caption'}><b>{data}</b></Typography>
    </div>
  );
};

export default LoadingPage;
