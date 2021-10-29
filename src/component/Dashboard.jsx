import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproject } from "../redux/actions/project";
import { getProjectTasks } from "../redux/actions/task";
import "../styling/dashboard.css";
import "../styling/navbar.css";
import Navbar from "./Navbar";

const Dashboard = () => {
  //   const history = useHistory();
  const dispatch = useDispatch();
  const stateUser = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getproject(stateUser.user.username));
  }, []);
  const state = useSelector((state) => state.project);
  const { tasks } = useSelector((state) => state.task);

  console.log(tasks);

  const [project, setProject] = useState({
    projectname: "",
    username: stateUser.user.username,
    project_description: "",
  });
  // const [tasksArray, setTasksArray] = useState([]);
  console.log("projo", state.project.project_name);

  useEffect(() => {
    if (state?.project?.project_name) {
      setProject({
        projectname: state.project.project_name,
        username: stateUser.user.username,
        project_description: state.project.project_description,
      });
      dispatch(getProjectTasks(state.project.project_name));
      // setTasksArray(tasks);
    }
  }, [state?.project]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="landing-page">
        <div className="project-section">
          <h3 style={{ color: "red" }}>Project Details</h3>
          <label htmlFor="">Project name :</label>
          <h4>
            <i>{project.projectname}</i>
          </h4>
          <label htmlFor="">Project Lead:</label>
          <h4>
            <i>{project.username}</i>
          </h4>
          <label htmlFor="">Project Description: </label>
          <p>
            <i>{project.project_description}</i>
          </p>
        </div>
        <div className="tasks-section">
          <h4>
            <b>Tasks</b>
          </h4>
          <div className="all_tasks">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th scope="col">Task</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.task_id}>
                    <th scope="row">1</th>
                    <td>{task.task}</td>
                    <td>{task.start_date}</td>
                    <td>{task.end_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
