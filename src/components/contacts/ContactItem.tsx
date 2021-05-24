import React from "react";
import {Contact} from "../../types/Contact";
import {createStyles, Grid, Link, makeStyles, Paper, Typography} from "@material-ui/core";
import {useSound} from "../../hooks/soundHook";
import CovidContext from "../../store/CovidContext";
import ErrorPage from "../utils/ErrorPage";
import LoadingPage from "../utils/LoadingPage";

interface ContactItemProps {
  data: Contact;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    containerPadding: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: 250,
      height: 250
    },
    image: {
      width: 100,
      resizeMode: 'contain'
    }
  })
);

const ContactItem: React.FC<ContactItemProps> = ({data}) => {
  const classes = useStyles();
  const {sound, error, loading} = useSound(data.sound);

  if (loading) {
    return <LoadingPage />
  }

  if(error) {
    return <ErrorPage error={error} />
  }

  return (
    <Grid item xs={12} sm className={classes.container}>
      <CovidContext.Consumer>
        {
          ({enabled}) => (
            <Paper elevation={3} className={classes.containerPadding}
                   onMouseEnter={() => enabled ? sound?.play() : null}
                   onMouseLeave={() => enabled ? () => {
                     sound?.pause();
                     sound!.currentTime = 0; } : null}>
              <img src={data.img} alt={data.name} className={classes.image} />
              <Typography variant={'h5'} color={'secondary'}><b>{data.name}</b></Typography>
              <Link href={`tel:${data.contact}`}>{data.contact}</Link>
            </Paper>
          )
        }
      </CovidContext.Consumer>
    </Grid>
  );
}

export default ContactItem;
