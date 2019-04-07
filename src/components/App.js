import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import PeliDetalles from "../pages/PeliDetalles";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700');

  body{
    margin:0;
    padding:0;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/detalles" component={PeliDetalles} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
