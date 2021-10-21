import React from "react";

// import { selectUser } from "../redux/reducers/userreducer";
import { useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router";
import Projects from "./Projects";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  // const user = useSelector(selectUser);
  const history = useHistory();
  // useEffect(() => {
  //   if (user?.id) history.push("/project");
  // }, [user, history]);

  return (
    <div>
      <Navbar>
        <Link to="">
          <h2 className="login">Login</h2>
        </Link>
      </Navbar>
      {/* {user ? (
        <Route path="/project" component={Projects} />
      ) : (
        <Redirect to="/login" />
      )} */}
    </div>
  );
};

export default Home;
