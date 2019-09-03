import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Jumbotron from "./Components/Jumbotron";
import Navbar from "./Components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Jumbotron />
      </Router>
    );
  }
}

export default App;
