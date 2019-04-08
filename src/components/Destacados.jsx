import React from "react";
import styled from "styled-components";

const Inicio = styled.div`
  background: darkred;
  color: #fff;
`;

const Destacados = props => {
  console.log(props);
  return <Inicio>{props.peliDestacada.title}</Inicio>;
};

export default Destacados;
