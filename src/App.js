import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./Components/Jumbotron";
import Navbar from "./Components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
      </div>
    )
  }
}

export default App;
