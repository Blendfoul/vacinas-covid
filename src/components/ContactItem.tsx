import React from "react";
import {Contact} from "../types/Contact";
import {Box, createStyles, Grid, Link, makeStyles, Typography} from "@material-ui/core";

interface ContactItemProps {
  data: Contact;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    }
  })
);

const ContactItem: React.FC<ContactItemProps> = ({data}) => {
  const classes = useStyles();

  return (
    <Box py={2}>
      <Grid item xs={12} sm>
        <div className={classes.container}>
          <Typography variant={'h5'} color={'secondary'}><b>{data.name}</b></Typography>
          <Link href={`tel:${data.contact}`}>{data.contact}</Link>
        </div>
      </Grid>
    </Box>
  );
}

export default ContactItem;
