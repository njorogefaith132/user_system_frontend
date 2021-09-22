import React from "react";

import { selectUser } from "../redux/reducers/userreducer";
import { useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router";
import Projects from "./Projects";
import { useEffect } from "react";

const Home = () => {
  const user = useSelector(selectUser);
  const history = useHistory();
  useEffect(() => {
    if (user?.id) history.push("/project");
  }, [user, history]);

  return (
    <div>
      {user ? (
        <Route path="/project" component={Projects} />
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Home;
