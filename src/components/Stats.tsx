import React, {useState} from "react";
import {
  Box,
  Container,
  createStyles,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  Theme,
  Typography,
} from "@material-ui/core";
import CovidData from "./CovidData";
import BreadCrumbs from "./BreadCrumbs";
import useAxios from "../hooks/useAxios";
import VaccineStats from "./VaccineStats";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const Stats: React.FC<any> = () => {
  const classes = useStyles();
  const [region, setRegion] = useState('');
  const {response} = useAxios(`https://covid19-api.vost.pt/Requests/get_county_list/`);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRegion(event.target.value as string);
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <BreadCrumbs primary={"Estatisticas"} secondary={[{name: 'Página Inicial', route: ''}]}/>
        </Grid>
        <Grid item xs={12}>
          <Box m={2}>
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant={'h6'} color={'secondary'}>Estatísticas de concelhos</Typography>
                <FormControl className={classes.formControl}>
                  <InputLabel id="region-select-label">Região</InputLabel>
                  <Select
                    labelId="region-select-label"
                    id="region-select"
                    value={region}
                    onChange={handleChange}
                  >
                    {
                      response && response.data.map((region: string) => <MenuItem key={`region-${region}`}
                                                                                  value={region}>{region.toLocaleLowerCase('PT')}</MenuItem>)
                    }
                  </Select>
                </FormControl>
                <Divider/>
                {
                  region && <CovidData data={region}/>
                }
              </Box>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <VaccineStats/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <VaccineStats/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Stats;
