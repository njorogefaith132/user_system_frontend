import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div>
      <Navbar>
        <Link to="/login">
          <h2 className="login">Login</h2>
        </Link>
        <Link to="/register">
          <h2 className="Register">Register</h2>
        </Link>
      </Navbar>
      <div className="welcome-section">
        {/* <img src={"../styling/Images/land.png"} alt="image" /> */}
        <h1>Welcome to The User System</h1>
      </div>
    </div>
  );
};

export default Home;
