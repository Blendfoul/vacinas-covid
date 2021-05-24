import React from "react";
import {Box, Breadcrumbs, createStyles, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

interface Bread{
  name: string;
  route: string;
}

interface BreadCrumbsProps {
  primary: string;
  secondary?: Bread[];
}

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      textEmphasis: undefined,
      textDecoration: 'none',
      "&:hover": {
        textDecoration: undefined
      },
      color: 'inherit'
    },
  })
);

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({primary, secondary= [], ...other}) => {
  const classes = useStyles();
   return (
     <Box m={2}>
       <Breadcrumbs aria-label="breadcrumb">
         {
           secondary.map(item => (
             <Link to={`/${item.route}`} className={classes.link} key={`crumb-${item.name}`}>
               {item.name}
             </Link>
           ))
         }
         <Typography color="textPrimary">{primary}</Typography>
       </Breadcrumbs>
     </Box>
   );
};

export default BreadCrumbs;
