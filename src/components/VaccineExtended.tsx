import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import {
  Box,
  Breadcrumbs,
  Container,
  createStyles,
  Divider,
  Grid, IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  Typography
} from "@material-ui/core";
import {Vaccine} from "../types/vaccine";
import {vaccines} from '../assets/content.json';
import TabPanel from "./TabPanel";
import {ArrowBack} from "@material-ui/icons";
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      maxWidth: '100%',
      maxHeight: 150,
      resizeMode: 'contain',
      objectPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
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

type VaccineState = Vaccine | null;

const VaccineExtended: React.FC<any> = () => {
  const [data, setData]: [VaccineState, React.Dispatch<React.SetStateAction<VaccineState>>] = useState(null as VaccineState);
  const {name} = useParams<{ name: string }>();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const backToVaccines = () => {
    history.push('/vacinas');
  }

  useEffect(() => {
    setData(vaccines.find(vaccine => vaccine.name === name)!);
  }, [name]);

  return data ? (
      <Container maxWidth={'md'}>
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
        <Box py={2}>
          <Paper elevation={3}>
            <Box p={3}>
              <IconButton edge="start" color="inherit" aria-label="go Back" onClick={backToVaccines}>
                <ArrowBack/>
              </IconButton>
              <Grid container spacing={2} direction="row" justify={'center'} alignItems={'center'}>
                <Box px={1} py={3}>
                  <Grid item xs={12}>
                    <img className={classes.image} alt={data.name} src={`/${data.img}`}/>
                  </Grid>
                </Box>
              </Grid>
              <Divider variant="middle"/>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Geral"/>
                <Tab label="Efeitos Secundários"/>
                <Tab label="Sumário"/>
              </Tabs>
              <TabPanel index={0} value={value}>
                <Box py={4} px={1}>
                  <Grid container direction={'row'} justify={'center'} alignItems={'center'}>
                    <Grid item xs={6} sm={4}>
                      <Typography variant={'h6'}>Nome</Typography>
                      <Typography variant={'body1'}>{data.codeName}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Typography variant={'h6'}>Produtor</Typography>
                      <Typography variant={'body1'}>{data.manufacturer}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Typography variant={'h6'}>Tipo</Typography>
                      <Typography variant={'body1'}>{data.type}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Typography variant={'h6'}>Produção</Typography>
                      <Typography variant={'body1'}>{data.year}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Typography variant={'h6'}>Doses</Typography>
                      <Typography variant={'body1'}>{data.doses}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Typography variant={'h6'}>Distância doses</Typography>
                      <Typography variant={'body1'}>{data.time} dias</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel index={1} value={value}>
                <Box p={2}>
                  <Grid container spacing={2} direction={'row'}>
                    <Grid item xs={12} sm={6}>
                      <List
                        component="nav"
                        aria-labelledby="arm-list-subheader"
                        subheader={
                          <ListSubheader component="div" id="arm-list-subheader">
                            Efeitos Secundários no braço
                          </ListSubheader>
                        }
                      >
                        {data.armEffects.map((effect, index) => (
                          <ListItem key={`arm-${index}`}>
                            <ListItemText primary={effect}/>
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <List
                        component="nav"
                        aria-labelledby="body-list-subheader"
                        subheader={
                          <ListSubheader component="div" id="body-list-subheader">
                            Efeitos Secundários gerais
                          </ListSubheader>
                        }
                      >
                        {data.bodyEffects.map((effect, index) => (
                          <ListItem key={`body-${index}`}>
                            <ListItemText primary={effect}/>
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
            </Box>
          </Paper>
        </Box>
      </Container>
    ) :
    null;
}

export default VaccineExtended;
