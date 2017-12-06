import React from "react";
import Style from "./Nav.css";

const Nav = () =>
  <nav  className="navbar navbar-expand-sm">
    <ul className="navbar-nav">
      <li className="nav-item">
        <h3 className="nav-link" >Clicky Game</h3>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <h3 className="nav-link">Score: 0 | Top Score: 0</h3>
      </li>
    </ul>
  </nav>; 

export default Nav;
