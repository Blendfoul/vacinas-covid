import React from 'react';
import {Box, Breadcrumbs, Container, Grid, Paper, Typography} from "@material-ui/core";

const Home: React.FC<any> = () => {
  return (
    <Container>
      <Box m={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="textPrimary">Vacinas Covid</Typography>
        </Breadcrumbs>
      </Box>
      <Grid container direction={'row'}>
        <Box m={2}>
          <Paper elevation={2}>
            <Typography variant={'h6'}></Typography>
          </Paper>
        </Box>
      </Grid>
    </Container>
  );
};

export default Home;
