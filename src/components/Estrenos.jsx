import React from "react";
import styled from "styled-components";

const imgSize = "w342/";
const imgBaseURL = `https://image.tmdb.org/t/p/${imgSize}`;

const Contenedor = styled.div`
  > ul {
    background: #141414;
    margin: 0;
    padding: 0;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    align-items: strech;
    /* justify-content: center; */
  }
`;

const ItemPelicula = styled.li`
  list-style: none;
  display: inline-block;
  min-width: 200px;
  height: 300px;
  margin: 5px;
  color: #fff;
  font-weight: bold;
  background: url(${props => `${imgBaseURL}${props.pelicula.poster_path}`})
    no-repeat;
  background-size: cover;
  > span {
    background: rgba(0, 0, 0, 0.7);
    display: none;
  }

  &:hover {
    > span {
      display: block;
    }
  }
`;

const Estrenos = ({ peliculas }) => {
  return (
    <Contenedor>
      <ul>
        {peliculas.map(peli => (
          <ItemPelicula key={peli.id} pelicula={peli}>
            <span>{peli.title}</span>
          </ItemPelicula>
        ))}
      </ul>
    </Contenedor>
  );
};

export default Estrenos;
