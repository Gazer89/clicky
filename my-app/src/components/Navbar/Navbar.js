import React from "react";
import "./Navbar.css";

const Navbar = props => (
<nav className="navbar navbar-primary">
  <div className="container-fluid">
    <div className="navbar-header">
      <div className="navbar-brand">Clicky Game</div>
    </div>
    <ul className="nav navbar-nav">
      <li ><div>Score: {props.score} Top Score: {props.topscore}</div></li>
    </ul>
  </div>
</nav>
);

export default Navbar;