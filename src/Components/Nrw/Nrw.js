import React from "react";
import { Container } from "react-bootstrap";
import Classes from "./Nrw.module.css";

export const Nrw = () => {
  return (
    <Container>
      <div className={Classes.nrw}>
        <div className={Classes.title}>Welcome to Narwana</div>
        <div className={Classes.subTitle}>
          Let's make our City Clean and Green
        </div>
      </div>
    </Container>
  );
};
