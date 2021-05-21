import React from "react";
import {Box, Paper} from "@material-ui/core";
import useAxios from "../hooks/useAxios";
import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";

const VaccineStats: React.FC<any> = () => {
  const {response} = useAxios('https://covid.ourworldindata.org/data/owid-covid-data.json');

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
                title: {
                  text: 'Total de Vacinados',
                  align: 'left',
                  style: {
                    color: '#F9AA33',
                    fontWeight: 'bold'
                  }
                },
                stroke: {
                  colors: ['#F9AA33']
                },
                grid: {
                  row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                  },
                },
                xaxis: {
                  categories: vaccinated.map((data: any) => data.day),
                }
              }

              return (
                <Chart options={options} series={content} type={"line"} height={350}/>
              );
            })
          }
        </Box>
      </Paper>
    </Box>
  )
};

export default VaccineStats;
