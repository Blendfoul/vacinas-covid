import React from "react";
import {Box, Breadcrumbs, Container, createStyles, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      textEmphasis: undefined,
      textDecoration: 'none',
      "&:hover": {
        textDecoration: 'underline'
      },
      color: 'inherit',
      marginLeft: 'auto'
    }
  }));

const Stats: React.FC<any> = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box m={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" className={classes.link}>
            Vacinas Covid
          </Link>
          <Typography color="textPrimary">Estatisticas</Typography>
        </Breadcrumbs>
      </Box>
    </Container>
  );
}

export default Stats;
