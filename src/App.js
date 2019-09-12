import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Jumbotron from "./Components/Jumbotron";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
// import Events from "./Components/Events";
import FOOTER from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <Router basename="/hotdoug-usa">
        <Navbar />
        <Jumbotron />
        <AboutUs />
        <FOOTER />
      </Router>
    );
  }
}

export default App;
