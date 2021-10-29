import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styling/admindash.css";
import TasksDisplay from "./TasksDisplay";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../redux/actions/project";
import { getProjectTasks } from "../redux/actions/task";

const Admin = () => {
  const { projects } = useSelector((state) => state.project);
  const { tasks } = useSelector((state) => state.task);
  console.log(tasks);

  console.log(projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
  }, []);
  return (
    <div className="user-page">
      <Navbar>
        <Link to="/admindashboard">
          <h4>View Projects</h4>
        </Link>
        <Link to="/users">
          <h4>View Users</h4>
        </Link>
      </Navbar>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Project Lead</th>
            <th scope="col">Tasks</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, count) => (
            <tr key={project.project_id}>
              <TasksDisplay tasks={tasks} />
              <th scope="row">{count + 1}</th>
              <td>{project.project_name}</td>
              <td>{project.project_description}</td>
              <td>{project.username}</td>
              <td>
                <button
                  onClick={() =>
                    dispatch(getProjectTasks(project.project_name))
                  }
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  View Tasks
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
