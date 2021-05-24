import React from "react";
import {createStyles, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, Typography} from "@material-ui/core";
import useAxios from "../hooks/useAxios";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import CovidContext from "../store/CovidContext";

const useStyles = makeStyles(theme => createStyles({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  item: {
    textTransform: 'capitalize'
  }
}));

interface RegionInputProps {
}

const RegionInput: React.FC<RegionInputProps> = () => {
  const {response, error, loading} = useAxios(`https://covid19-api.vost.pt/Requests/get_county_list/`);
  const classes = useStyles();

  if(loading) {
    return (
      <Grid item xs={12}>
        <LoadingPage data={'A carregar concelhos!'} />
      </Grid>
    );
  }

  if(error) {
    return <ErrorPage error={error} />;
  }

  return (
    <React.Fragment>
      <Typography variant={'h6'} color={'secondary'}><b>Estatísticas de concelhos </b></Typography>
      <CovidContext.Consumer>
        {
          ({region, setRegion}) => (
            <FormControl className={classes.formControl}>
              <InputLabel id="region-select-label">Região</InputLabel>
              <Select
                labelId="region-select-label"
                id="region-select"
                value={region}
                onChange={event => setRegion(event.target.value as string)}
              >
                {
                  response && response.data.map((region: string) => <MenuItem key={`region-${region}`}
                                                                              value={region} className={classes.item}>{region.toLocaleLowerCase('PT')}</MenuItem>)
                }
              </Select>
            </FormControl>
          )

        }
      </CovidContext.Consumer>
    </React.Fragment>
  );
}

export default RegionInput;
