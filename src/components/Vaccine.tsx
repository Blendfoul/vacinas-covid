import React from "react";
import {VaccineProps} from "../types/vaccine";
import {Card, CardActionArea, CardContent, CardMedia, createStyles, makeStyles, Typography} from "@material-ui/core";
import {Link, useRouteMatch} from 'react-router-dom';
import CovidContext from "../store/CovidContext";
import {playSound} from "../hooks/soundHook";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 15,
      height: '100%'
    },
    media: {
      maxWidth: '100%',
      height: 80,
      objectFit: 'contain',
      resizeMode: 'contain',
      objectPosition: 'center'
    },
    container: {
      padding: 15
    },
    link: {
      textEmphasis: undefined,
      textDecoration: 'none',
      "&:hover": {
        textDecoration: 'underline'
      },
      color: 'inherit',
      marginLeft: 'auto'
    }
  }));

const Vaccine: React.FC<VaccineProps> = ({data}) => {
  const classes = useStyles();
  const match = useRouteMatch();

  return (
    <CovidContext.Consumer>
      {
        ({enabled}) => (
          <Card variant="elevation" className={classes.root} elevation={3}
                onMouseEnter={() => enabled ? playSound(data.audio) : null}>

            <Link to={`${match.path}/${data.name}`} className={classes.link}>
              <CardActionArea>
                <div className={classes.container}>
                  <CardMedia
                    className={classes.media}
                    image={data.img}
                    title={data.name}
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" color={'primary'}>
                    {data.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {data.manufacturer}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        )
      }
    </CovidContext.Consumer>
  );
};

export default Vaccine;
