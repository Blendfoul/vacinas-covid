import React from "react";
import {Container, createStyles, makeStyles, Typography} from "@material-ui/core";
import {Error} from "@material-ui/icons";

type ErrorPage = Error | {message: string};
type PageType = 'not-found' | 'error';


interface ErrorProps {
  error: ErrorPage;
  type?: PageType;
}

const useStyles = makeStyles(() => createStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '75vh'
  },
  icon: {
    width: 250,
    height: 250,
  },
  notFound: {
    height: 500
  }
}));

const ErrorPage: React.FC<ErrorProps> = ({error, type = 'error'}) => {
  const classes = useStyles();

  if (type === 'error') {
    return (
      <Container className={classes.container}>
        <Error className={classes.icon} color={'secondary'}/>
        <Typography variant={'caption'} color={'primary'}><b>{error.message}</b></Typography>
      </Container>
    );
  }

  return (
    <Container className={classes.container}>
      <img src={'/error-404.svg'} className={classes.notFound} alt={error.message} />
      <Typography variant={'caption'} color={'primary'}><b>{error.message}</b></Typography>
    </Container>
  )
};

export default ErrorPage;
