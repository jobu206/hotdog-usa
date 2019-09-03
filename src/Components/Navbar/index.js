import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Router>
          <Link className="navbarText navbar-brand" to="/">
            Hot Dog USA
          </Link>
        </Router>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    );
  }
}

export default Navbar;
