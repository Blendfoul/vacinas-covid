import React, {useCallback, useEffect, useState} from "react";
import {
  Box,
  Container,
  createStyles,
  Divider,
  FormControl,
  InputLabel,
  makeStyles, MenuItem,
  Paper,
  Select,
  Theme, Typography,
} from "@material-ui/core";
import axios, {AxiosRequestConfig} from "axios";
import {Statistics} from "../types/Statistics";
import CovidData from "./CovidData";
import BreadCrumbs from "./BreadCrumbs";

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

type DataState = Statistics | null;

const Stats: React.FC<any> = () => {
  const classes = useStyles();
  const [region, setRegion] = useState('');
  const [availableRegions, setAvailable] = useState([] as string[]);
  const [data, setData] = useState(null as DataState);

  const fetchRegions = useCallback(async () => {
    const source = axios.CancelToken.source();

    const options: AxiosRequestConfig = {
      method: 'GET',
      url: `https://covid19-api.vost.pt/Requests/get_county_list/`,
      cancelToken: source.token,
    };

    try {
      const response = await axios(options);
      setAvailable(response.data);
    } catch (e) {
      console.error(e);
    }

    return () => source.cancel('Component unmounted!');
  }, [setAvailable]);

  const fetchStatistics = useCallback(async region => {
    const source = axios.CancelToken.source();

    const options: AxiosRequestConfig = {
      method: 'GET',
      url: `https://covid19-api.vost.pt/Requests/get_last_update_specific_county/${region}`,
      cancelToken: source.token,
    };

    try {
      const response = await axios(options);
      setData(response.data[0]);
    } catch (e) {
      console.error(e);
    }

    return () => source.cancel('Component unmounted!');
  }, [setData]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRegion(event.target.value as string);
  };

  useEffect(() => {
    if (!availableRegions.length) {
      fetchRegions();
    }
  }, [availableRegions, fetchRegions]);

  useEffect(() => {
    if (region) {
      fetchStatistics(region);
    }
  }, [region, fetchStatistics]);

  return (
    <Container>
      <BreadCrumbs primary={"Estatisticas"} secondary={[{name: 'Página Inicial', route: ''}]} />
      <Box py={2}>
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
                  availableRegions.map((region) => <MenuItem key={`region-${region}`}
                                                             value={region}>{region.toLocaleLowerCase('PT')}</MenuItem>)
                }
              </Select>
            </FormControl>
            {data !== null && (
              <>
                <Divider/>
                <Box p={2}>
                  <CovidData data={data!}/>
                </Box>
              </>
            )}

          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Stats;
