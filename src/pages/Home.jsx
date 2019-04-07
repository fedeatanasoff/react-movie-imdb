import React, { Component } from "react";
import Destacados from "../components/Destacados";
import Estrenos from "../components/Estrenos";
import axios from "axios";

class Home extends Component {
  state = {
    peliculas: []
  };

  componentDidMount() {
    if (this.state.peliculas.length === 0) {
      this.getData()
        .then(data => this.setState({ peliculas: data.data.results }))
        .catch(e => console.log("Error: ", e));
    }
  }

  async getData() {
    let resultado = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=26fcc7f157d992f403ae4b6144eabf3&language=es-AR`
    );

    return resultado;

    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/movie/now_playing?api_key=a26fcc7f157d992f403ae4b6144eabf3&language=es-AR`
    //   )
    //   .then(data => {
    //     console.log(data);
    //     this.setState({ peliculas: data.data.results });
    //   });

    // fetch(
    //   `https://api.themoviedb.org/3/movie/now_playing?api_key=a26fcc7f157d992f403ae4b6144eabf3&language=es-AR`
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log("data fetch", data);
    //     this.setState({ peliculas: data.results });
    //   });
  }

  render() {
    console.log("estado desde el render =>", this.state.peliculas);
    return (
      <div>
        <Destacados />
        <Estrenos peliculas={this.state.peliculas} />
      </div>
    );
  }
}

export default Home;
