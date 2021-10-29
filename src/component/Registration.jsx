import React, { useEffect } from "react";
import "../styling/registration.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addingUser } from "../redux/actions/user";
import Navbar from "./Navbar";

const Registration = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.user);
  console.log(state);

  const [user, setUser] = useState({
    username: "",
    password: "",
    usertype: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addingUser(user));
  };
  const onChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const ischecked = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: [e.target.checked] }));
  };

  useEffect(() => {
    if (state?.user?.username) {
      history.push("/dashboard");
    } else {
      console.log("hi");
    }
    console.log("<<<<<<<<<<<", state.user.username);
  }, [state?.user?.username]);

  return (
    <div>
      <Navbar>
        <Link to="/login">
          <h2>Login</h2>
        </Link>
      </Navbar>
      <div className="registration-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            onChange={onChange}
            placeholder="input username"
          />
          <label htmlFor="">Password</label>
          <input
            type="text"
            name="password"
            onChange={onChange}
            placeholder="input password"
          />
          <input
            type="checkbox"
            name="admin"
            value={"admin"}
            // checked={ischecked}
            onChange={ischecked}
            placeholder="input password"
          />
          <span>Admin</span>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
