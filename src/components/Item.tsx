import React from "react";
import {Grid, GridSize, Typography} from "@material-ui/core";

interface ItemProps {
  primary: string;
  secondary: string | number;
  xs?: boolean | GridSize | undefined;
  sm?: boolean | GridSize | undefined;
}

const Item: React.FC<ItemProps> = props => {
  const {primary, secondary, ...other} = props;

  return (
    <Grid item {...other}>
      <Typography variant={'caption'}>{primary}</Typography>
      <Typography>{secondary}</Typography>
    </Grid>
  );
}

export default Item;
