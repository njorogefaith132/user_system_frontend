import React from "react";
import { Link } from "react-router-dom";
import "../styling/navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>User System</h1>
      </Link>
      <div className="log-reg">{props.children}</div>
    </nav>
  );
};

export default Navbar;
