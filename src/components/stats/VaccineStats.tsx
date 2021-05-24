import React from "react";
import {Box, Paper} from "@material-ui/core";
import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";

interface VaccineStatsProps {
  response: any;
}

const VaccineStats: React.FC<VaccineStatsProps> = ({response}) => {
  return (
    <Box m={2}>
      <Paper elevation={3}>
        <Box p={4}>
          {
            response && (() => {
              const {data} = response.data.PRT;

              const vaccinated = data.map((data: any) => {
                return {vaccinated: data.people_fully_vaccinated, day: data.date}
              }).filter((data: any) => data.vaccinated !== undefined);

              const content = [{
                name: "Vacinados",
                data: vaccinated.map((data: any) => data.vaccinated)
              }];

              const options: ApexOptions = {
                chart: {
                  zoom: {
                    enabled: false
                  }
                },
                title: {
                  text: 'Total de Vacinados',
                  align: 'left',
                  style: {
                    fontSize: '20px',
                    color: '#F9AA33',
                    fontWeight: 'bold'
                  }
                },
                stroke: {
                  colors: ['#F9AA33']
                },
                grid: {
                  row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5
                  },
                },
                xaxis: {
                  categories: vaccinated.map((data: any) => data.day),
                }
              }

              return (
                <Box p={2}>
                  <Chart options={options} series={content} type={"line"} height={350}/>
                </Box>
              );
            })
          }
        </Box>
      </Paper>
    </Box>
  );
};

export default VaccineStats;
