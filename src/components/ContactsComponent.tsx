import React from "react";
import {Box, Container, Grid, Paper} from "@material-ui/core";
import BreadCrumbs from "./BreadCrumbs";
import {contacts} from '../assets/content.json';
import ContactItem from "./ContactItem";
import {Contact} from "../types/Contact";

const ContactComponent: React.FC<any> = () => {
  return (
    <Container>
      <BreadCrumbs primary={'Contactos'} secondary={[{name: 'Página Inicial', route: ''}]}/>
      <Paper elevation={3}>
        <Box px={2}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Grid container direction={'column'}>
                {
                  contacts.map((contact: Contact) => <ContactItem data={contact} key={`contact-${contact.name}`}/>)
                }
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  )
};

export default ContactComponent;
