import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return(
      <nav className="navbar navbar-expand-lg font-weight-bold">
        <Router>
          <Link className="navbarText navbar-brand" to="/">
            Hot Dog USA
          </Link>
        </Router>
        <button
          className="navbar-toggler custom-toggler"
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
  )
}

export default Navbar;
