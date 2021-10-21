import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styling/admindash.css";
import TasksDisplay from "./TasksDisplay";

const Admin = () => {
  return (
    <div>
      <Navbar>
        <Link to="/allprojects">
          <h4>View Projects</h4>
        </Link>
        <Link to="/allUsers">
          <h4>View Users</h4>
        </Link>
      </Navbar>
      <div className="project-section">
        <div className="project card-body">
          <h2 className="card-title">Project Title</h2>
          <h3 className="card-text">Project Lead</h3>
          <TasksDisplay />
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            View Tasks
          </button>
        </div>
        <div className="project card-body">
          <h2 className="card-title">Project Title</h2>
          <h3 className="card-text">Project Lead</h3>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            View Tasks
          </button>
        </div>
        <div className="project card-body">
          <h2 className="card-title">Project Title</h2>
          <h3 className="card-text">Project Lead</h3>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            View Tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
