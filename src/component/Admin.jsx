import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styling/admindash.css";
import TasksDisplay from "./TasksDisplay";

const Admin = () => {
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
        <TasksDisplay />
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                View Tasks
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                View Tasks
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                View Tasks
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
