import React from "react";
import { Container } from "reactstrap";
import "../css/seccioncomun.css";

const SeccionComun = ({nombre}) => {
  return (
    <section className="seccioncomun">
      <Container>
        <h2 className="text-white">Nombre</h2>
      </Container>
    </section>
  );
};

export default SeccionComun;