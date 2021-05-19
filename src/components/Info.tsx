import React from "react";
import {Container} from "@material-ui/core";
import BreadCrumbs from "./BreadCrumbs";

const Info: React.FC<any> = () => {
  return (
    <Container>
      <BreadCrumbs primary={"Informações"} secondary={[{name: 'Página Inicial', route: ''}]} />
    </Container>
  );
};

export default Info;
