import React from "react";
import {Info} from "../types/Info";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  createStyles,
  Grid, List, ListItem, ListItemText, ListSubheader,
  makeStyles,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface InfoItemProps {
  data: Info;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText
    },
    content: {
      backgroundColor: theme.palette.primary.light
    },
    listTitle: {
      color: theme.palette.secondary.main
    }
  })
);

const InfoItem: React.FC<InfoItemProps> = ({data}) => {
  const classes = useStyles();

  return (
    <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color={'secondary'} />}
        aria-label="Expand"
      >
        <Typography variant={"h5"}>{data.name}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.content}>
        <Grid container>
          {
            data.data && data.data.map(item => (
              <Grid item xs={12} sm>
                <List subheader={<ListSubheader component={'div'} className={classes.listTitle}>{item.name}</ListSubheader>}>
                  {
                    item.data.map( s => (
                      <ListItem>
                        <ListItemText primary={s}/>
                      </ListItem>
                    ))
                  }
                </List>
              </Grid>
            ))
          }
        </Grid>

      </AccordionDetails>
    </Accordion>
  )
};

export default InfoItem;
