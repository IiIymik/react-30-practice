import React from "react";
import Card from "../Card/Card";
import data from "../../data/university.json";
import { Container, Box } from "./Info.styles";
import Paper from "../Paper/Paper";

function Info() {
  return (
    <Container>
      <Card name={data.name} />
      <Paper><Box>{data.description}</Box></Paper>
    </Container>
  );
}

export default Info;