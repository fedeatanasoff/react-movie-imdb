import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import PeliDetalles from "../pages/PeliDetalles";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/detalles" component={PeliDetalles} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
