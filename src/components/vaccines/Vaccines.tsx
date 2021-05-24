import React from "react";
import {Box, Breadcrumbs, Container, createStyles, Grid, makeStyles, Typography} from "@material-ui/core";
import {vaccines} from '../../assets/content.json';
import {Link} from 'react-router-dom';
import Vaccine from "./Vaccine";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      marginHorizontal: 20
    },
    link: {
      textEmphasis: undefined,
      textDecoration: 'none',
      "&:hover": {
        textDecoration: 'underline'
      },
      color: 'inherit',
      marginLeft: 'auto'
    },
    item: {
      height: '100%'
    }
  }));

const Vaccines: React.FC<any> = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box m={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" className={classes.link}>
            Vacinas Covid
          </Link>
          <Typography color="textPrimary">Vacinas</Typography>
        </Breadcrumbs>
      </Box>
      <Grid
        container direction="row"
        justify="center" alignItems="center" spacing={2} className={classes.root}>
        {
          vaccines.map((item, index) => (
            <Grid item xs={12} md={3} key={`vaccine-${index}`} className={classes.item}>
              <Vaccine data={item}/>
            </Grid>
            )
          )
        }
      </Grid>
    </Container>
  );
};

export default Vaccines;
