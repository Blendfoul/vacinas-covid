import React from "react";
import {Box, Container, Grid, Paper,} from "@material-ui/core";
import CovidData from "./CovidData";
import BreadCrumbs from "../utils/BreadCrumbs";
import useAxios from "../../hooks/useAxios";
import VaccineStats from "./VaccineStats";
import VaccineDataStats from "./VaccineDataStats";
import LoadingPage from "../utils/LoadingPage";
import ErrorPage from "../utils/ErrorPage";
import RegionInput from "./RegionInput";
import CovidContext from "../../store/CovidContext";

const VaccineContainer: React.FC<any> = () => {
  const {response, loading, error} = useAxios('https://covid.ourworldindata.org/data/owid-covid-data.json');

  if (loading) {
    return (
      <Grid item xs={12}>
        <LoadingPage data={'A calcular doses...'}/>
      </Grid>
    );
  }

  if (error) {
    return <ErrorPage error={error}/>
  }

  return <>
    <Grid item xs={12} sm={6}>
      <VaccineStats response={response}/>
    </Grid>
    <Grid item xs={12} sm={6}>
      <VaccineDataStats response={response}/>
    </Grid>
  </>;
};

const Stats: React.FC<any> = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <BreadCrumbs primary={"Estatisticas"} secondary={[{name: 'Vacinas covid', route: ''}]}/>
        </Grid>
        <Grid item xs={12}>
          <Box m={2}>
            <Paper elevation={3}>
              <Box p={2}>
                <CovidContext.Consumer>
                  {
                    ({region}) => (
                      <>
                        <RegionInput />
                        {region.length ? <CovidData data={region}/> : null}
                      </>
                    )
                  }
                </CovidContext.Consumer>
              </Box>
            </Paper>
          </Box>
        </Grid>
        <VaccineContainer/>
      </Grid>
    </Container>
  );
}

export default Stats;
