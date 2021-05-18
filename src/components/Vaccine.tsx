import React from "react";
import {VaccineProps} from "../types/vaccine";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  createStyles,
  IconButton,
  makeStyles,
  Typography
} from "@material-ui/core";
import {Link, useRouteMatch} from 'react-router-dom';
import {Add} from "@material-ui/icons";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 15
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
    <Card variant="outlined" className={classes.root} elevation={3}>
      <div className={classes.container}>
        <CardMedia
          className={classes.media}
          image={data.img}
          title={data.name}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {data.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.year}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`${match.path}/${data.name}`} className={classes.link}>
          <IconButton aria-label="Mais Informações">
            <Add/>
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Vaccine;
