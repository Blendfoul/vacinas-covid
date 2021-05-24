import React from "react";
import {Box, Container, createStyles, Grid, makeStyles} from "@material-ui/core";
import BreadCrumbs from "./BreadCrumbs";
import {contacts} from '../assets/content.json';
import ContactItem from "./ContactItem";
import {Contact} from "../types/Contact";

const useStyles = makeStyles(() => createStyles({
  container: {
    height: '100%'
  }
}));

const ContactComponent: React.FC<any> = () => {
  const classes = useStyles();

  return (
  <Container className={classes.container}>
    <BreadCrumbs primary={'Contactos'} secondary={[{name: 'Vacinas covid', route: ''}]}/>
    <Box px={2}>
      <Grid container justify={'center'} alignItems={'center'} className={classes.container}>
        <Grid item xs={12} sm>
          <Grid container justify={'center'} alignItems={'center'} spacing={1}>
            {
              contacts.map((contact: Contact) => <ContactItem data={contact} key={`contact-${contact.name}`}/>)
            }
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </Container>
  )
};

export default ContactComponent;
