import React from "react";
import {Box, Grid, Paper, Typography} from "@material-ui/core";
import {VaccineStats} from "../types/Statistics";
import Item from "./Item";

interface VaccineDataStatsProps {
  response: any;
}

const VaccineDataStats: React.FC<VaccineDataStatsProps> = ({response}) => {
  return (
    <Box m={2}>
      <Paper elevation={3}>
        <Box p={4}>
          {
            response && (() => {
              const {data}: {data: VaccineStats[]} = response.data.PRT;

              const dayStats: VaccineStats = data[data.length - 1];

              return (
                <Box p={2}>
                  <Typography variant={'h6'} color={'secondary'}><b>Estatísticas de vacinação</b></Typography>
                  <Grid container>
                    <Item xs={6} sm={4} primary={'Doses administradas'} secondary={(dayStats.total_vaccinations * 0.000001).toFixed(2) + 'M'} />
                    <Item xs={6} sm={4} primary={'Totalmente vacinados'} secondary={(dayStats.people_fully_vaccinated * 0.000001).toFixed(2) + 'M'} />
                    <Item xs={6} sm={4} primary={'% da população vacinada'} secondary={dayStats.people_fully_vaccinated_per_hundred + '%'} />
                    <Item xs={6} sm={4} primary={'Novas vacinações'} secondary={dayStats.new_vaccinations} />
                  </Grid>
                </Box>
              );
            })
          }
        </Box>
      </Paper>
    </Box>
  );
};

export default VaccineDataStats;
