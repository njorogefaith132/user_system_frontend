import React from "react";
import "../styling/login.css";

import "../styling/navbar.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchinguser } from "../redux/actions/user";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.user);
  console.log(state);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchinguser(user));
  };
  const onChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (state?.user?.id) {
      history.push("/project");
    } else {
      console.log("hi");
    }
    console.log("<<<<<<<<<<<", state.user.id);
  }, [state?.user?.id]);

  return (
    <div className="login">
      <Navbar>
        <Link to="/Register">
          <h2>Register</h2>
        </Link>
      </Navbar>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="input username"
            onChange={onChange}
          />

          <label htmlFor="">Password</label>
          <input
            name="password"
            type="text"
            placeholder="input password"
            onChange={onChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
