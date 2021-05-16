import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import {
  Box,
  Breadcrumbs,
  Container,
  createStyles,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography
} from "@material-ui/core";
import {Vaccine} from "../types/vaccine";
import {vaccines} from '../assets/content.json';

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      width: '100%',
      height: 150,
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
  }));

type VaccineState = Vaccine | null;

const VaccineExtended: React.FC<any> = () => {
  const [data, setData]: [VaccineState, React.Dispatch<React.SetStateAction<VaccineState>>] = useState(null as VaccineState);
  const {name} = useParams<{ name: string }>();
  const classes = useStyles();

  useEffect(() => {
    setData(vaccines.find(vaccine => vaccine.name === name)!);
  }, []);

  return data ? (
      <Container>
        <Box m={2}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/" className={classes.link}>
              Vacinas Covid
            </Link>
            <Link to="/vacinas" className={classes.link}>
              Vacinas
            </Link>
            <Typography color="textPrimary">{name}</Typography>
          </Breadcrumbs>
        </Box>
        <Paper elevation={3}>
          <Box m={4}>
            <Grid container spacing={2} direction="row" justify={'center'} alignItems={'center'}>
              <Grid item xs={12}>
                <img className={classes.image} alt={data.name} src={`/${data.img}`}/>
              </Grid>
            </Grid>
            <Divider variant="middle"/>
            <Box m={4}>
              <Grid container direction={'row'} justify={'flex-start'} alignItems={'center'}>
                <Grid item xs={12}>
                  <Typography variant={'body1'}>{data.info}</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant={'h6'}>Produção</Typography>
                  <Typography variant={'body1'}>{data.year}</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant={'h6'}>Doses</Typography>
                  <Typography variant={'body1'}>{data.doses}</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant={'h6'}>Distância doses</Typography>
                  <Typography variant={'body1'}>{data.time}</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
    ) :
    null;
}

export default VaccineExtended;
