import React from "react";
import styled from "styled-components";

const imgSize = "w1280/";
const imgBaseURL = `https://image.tmdb.org/t/p/${imgSize}`;

const Inicio = styled.div`
  background: url(${props => `${imgBaseURL}${props.pelicula.backdrop_path}`})
    no-repeat;
  background-size: cover;
  height: 85vh;
  display: flex;
  align-items: strech;
`;

const PeliInfo = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 300px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PeliTitulo = styled.h1`
  color: #fff;
  text-transform: uppercase;
`;

const PeliDescripcion = styled.p`
  color: #fff;
`;

const Destacados = ({ peliDestacada }) => {
  console.log("pelidestacada =>", peliDestacada);
  return (
    <Inicio pelicula={peliDestacada}>
      <PeliInfo>
        <PeliTitulo>{peliDestacada.title}</PeliTitulo>
        <PeliDescripcion>{peliDestacada.overview}</PeliDescripcion>
      </PeliInfo>
    </Inicio>
  );
};

export default Destacados;
