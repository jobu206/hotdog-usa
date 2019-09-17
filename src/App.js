import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Jumbotron from "./Components/Jumbotron";
import Navbar from "./Components/Navbar";
import Coaches from './Components/Coaches';
// import AboutUs from "./Components/AboutUs";
// import Events from "./Components/Events";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <Router basename="/hotdoug-usa">
        <Navbar />
        <Jumbotron />
        <Coaches />
        <Footer />
      </Router>
    );
  }
}

export default App;
