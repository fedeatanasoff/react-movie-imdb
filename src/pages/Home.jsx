import React, { Component } from "react";
import Destacados from "../components/Destacados";
import Estrenos from "../components/Estrenos";

class Home extends Component {
  render() {
    return (
      <div>
        <Destacados />
        <Estrenos />
      </div>
    );
  }
}

export default Home;
