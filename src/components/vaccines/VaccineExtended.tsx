import React, {useEffect, useState} from "react";
import {useHistory, useParams} from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  createStyles,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  withWidth
} from "@material-ui/core";
import {Vaccine} from "../../types/vaccine";
import {vaccines} from '../../assets/content.json';
import TabPanel from "./TabPanel";
import {ArrowBack} from "@material-ui/icons";
import Item from "../utils/Item";
import BreadCrumbs from "../utils/BreadCrumbs";
import TextItem from "../utils/TextItem";
import SummaryItem from "./SummaryItem";

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
    },
    paper: {
      display: 'flex',
      justifyContent: 'center'
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
        <BreadCrumbs primary={name} secondary={[{name: 'Vacinas covid', route: ''}, {name: 'Vacinas', route: 'vacinas'}]} />
        <Box py={2}>
          <Paper elevation={3}>
            <Box p={3}>
              <Button color="inherit" onClick={backToVaccines} startIcon={<ArrowBack color={'primary'}/>}>
                <TextItem variant={'caption'} color={'primary'} soundPath={'/sounds/voltar.mp3'}>Voltar</TextItem>
              </Button>
              <Grid container spacing={2} direction="row" justify={'center'} alignItems={'center'}>
                <Box px={1} py={3}>
                  <Grid item xs={12}>
                    <img className={classes.image} alt={data.name} src={`/${data.img}`}/>
                  </Grid>
                </Box>
              </Grid>
              <Paper elevation={0} className={classes.paper} >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="secondary"
                  variant={'scrollable'}
                  scrollButtons="auto"
                >
                  <Tab label="Geral"/>
                  <Tab label="Efeitos Secund??rios"/>
                  <Tab label="Sum??rio"/>
                </Tabs>
              </Paper>
              <TabPanel index={0} value={value}>
                <Box py={2} px={1}>
                  <Grid container direction={'row'} justify={'center'} alignItems={'center'}>
                    <Item xs={6} sm={4} primary={'Nome'} secondary={data.codeName}/>
                    <Item xs={6} sm={4} primary={'Produtor'} secondary={data.manufacturer}/>
                    <Item xs={6} sm={4} primary={'Tipo'} secondary={data.type}/>
                    <Item xs={6} sm={4} primary={'Produ????o'} secondary={data.year}/>
                    <Item xs={6} sm={4} primary={'Doses'} secondary={data.doses}/>
                    <Item xs={6} sm={4} primary={'Dist??ncia doses'} secondary={`${data.time} dias`}/>
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
                            Efeitos Secund??rios no bra??o
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
                            Efeitos Secund??rios gerais
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
              <TabPanel index={2} value={value}>
                <Box p={2}>
                  <Grid container direction={'row'}>
                    <Grid item xs={12}>
                        {
                          data.summary.map((item, index) => (
                            <SummaryItem text={item.text} soundPath={item.sound} key={`sum-${index}`}/>
                          ))
                        }
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

export default withWidth()(VaccineExtended);
