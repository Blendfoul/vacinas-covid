import React from "react";
import {Statistics} from "../../types/Statistics";
import {Box, Grid} from "@material-ui/core";
import Item from "../utils/Item";
import useAxios from "../../hooks/useAxios";
import LoadingPage from "../utils/LoadingPage";
import ErrorPage from "../utils/ErrorPage";

interface CovidDataProps {
  data: string;
}

declare global {
  interface String {
    capitalize(): string;
  }
}

String.prototype.capitalize = function() {
  let s = String(this);
  return s[0].toUpperCase() + s.slice(1);
}

const CovidData: React.FC<CovidDataProps> = ({data}) => {
  const {response, loading, error} = useAxios(`https://covid19-api.vost.pt/Requests/get_last_update_specific_county/${data}`, {}, [data]);

  if(loading) {
    return <LoadingPage data={`A visitar ${data.toLocaleLowerCase('PT').capitalize()}!`} />;
  }

  if(error) {
    return <ErrorPage error={error} />
  }

  return (
    <React.Fragment>
      <Box p={2}>
        {
          response && (() => {
            const stats: Statistics = response.data[0];
             return (
               <>
                 <Grid container direction={'row'}>
                   <Item xs={6} sm={12} primary={'Data'} secondary={stats.data}/>
                   <Item xs={6} sm primary={'Área'} secondary={`${stats.area}m`}/>
                   <Item xs={6} sm primary={'Distrito'} secondary={stats.distrito}/>
                   <Item xs={6} sm primary={'Concelho'} secondary={stats.concelho}/>
                   <Item xs={6} sm primary={'População'} secondary={stats.population}/>
                 </Grid>
                 <Grid container direction={'row'}>
                   <Item xs={4} sm primary={'Casos Átivos'} secondary={stats.casos_14dias}/>
                   <Item xs={4} sm primary={'Incidência'} secondary={stats.incidencia}/>
                   <Item xs={4} sm primary={'Densidade Populacional'} secondary={stats.densidade_populacional}/>
                   <Item xs={4} sm primary={'Risco'} secondary={stats.incidencia_risco}/>
                 </Grid>
               </>
             );
          })
        }
      </Box>
    </React.Fragment>
  );
};

export default CovidData;
