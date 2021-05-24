import React from "react";
import {Box, Container} from "@material-ui/core";
import BreadCrumbs from "../utils/BreadCrumbs";
import {info} from '../../assets/content.json';
import {Info} from "../../types/Info";
import InfoItem from "./InfoItem";

const InfoComponent: React.FC<any> = () => {
  return (
    <Container>
      <BreadCrumbs primary={"Informações"} secondary={[{name: 'Vacinas covid', route: ''}]} />
        <Box p={2}>
          {
            info.map((item: Info) => <InfoItem key={`info-${item.name}`} data={item} />)
          }
        </Box>
    </Container>
  );
};

export default InfoComponent;
