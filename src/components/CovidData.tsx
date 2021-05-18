import React from "react";
import {Statistics} from "../types/Statistics";
import {Grid} from "@material-ui/core";
import Item from "./Item";

interface CovidDataProps {
  data: Statistics;
}

const CovidData: React.FC<CovidDataProps> = ({data}) => {
  return (
    <React.Fragment>
      <Grid container direction={'row'}>
        <Item xs={6} sm={12} primary={'Data'} secondary={data.data} />
        <Item xs={6} sm primary={'Área'} secondary={`${data.area}m`} />
        <Item xs={6} sm primary={'Distrito'} secondary={data.distrito} />
        <Item xs={6} sm primary={'Concelho'} secondary={data.concelho} />
        <Item xs={6} sm primary={'População'} secondary={data.population} />
      </Grid>
      <Grid container direction={'row'}>
        <Item xs={4} sm primary={'Casos Átivos'} secondary={data.casos_14dias} />
        <Item xs={4} sm primary={'Incidência'} secondary={data.incidencia} />
        <Item xs={4} sm primary={'Densidade Populacional'} secondary={data.densidade_populacional} />
        <Item xs={4} sm primary={'Risco'} secondary={data.incidencia_risco} />
      </Grid>
    </React.Fragment>
  );
};

export default CovidData;
