import React from "react";
import Style from "./Nav.css";

const Nav = props =>
  <nav  className="navbar navbar-expand-sm fixed-top">
    <ul className="navbar-nav">
      <li className="nav-item">
        <h3 className="nav-link" >Clicky Game</h3>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <h3 className="nav-link">Score: {props.score} | Top Score: {props.topScore}</h3>
      </li>
    </ul>
  </nav>; 

export default Nav;
