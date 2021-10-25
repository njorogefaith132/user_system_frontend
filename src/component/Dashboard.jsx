import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { getproject } from "../redux/actions/project";
import "../styling/dashboard.css";
import "../styling/navbar.css";

const Dashboard = () => {
  //   const history = useHistory();
  //   const dispatch = useDispatch();

  const state = useSelector((state) => state.project);
  const stateUser = useSelector((state) => state.user);

  const [project, setProject] = useState({
    projectname: "",
    username: stateUser.user.username,
    project_description: "",
  });

  console.log("projo", state.project.project_name);
  useEffect(() => {
    if (state?.project?.project_name) {
      setProject({
        projectname: state.project.project_name,
        username: stateUser.user.username,
        project_description: state.project.project_description,
      });
    }
  }, []);

  //   if (localStorage.length === 0) {
  //     history.push("/login");
  //   }

  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <h1>User System</h1>
        </Link>
        <div className="log-reg">
          <Link to="/task">
            <h2>Add Tasks</h2>
          </Link>
        </div>
      </div>
      <div className="landing-page">
        <div className="project-section">
          <h3>Project Details</h3>

          <h4>...{project.project_name}</h4>
          <h3>{project.username}</h3>
          <p>{project.project_description}</p>
        </div>
        <div className="tasks-section">
          <h4>Tasks</h4>
          <ul>
            <li>create landing page</li>
            <li>create landing page</li>
            <li>create landing page</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
