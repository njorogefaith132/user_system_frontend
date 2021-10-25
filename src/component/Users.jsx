import React from "react";
import { Link } from "react-router-dom";
import "../styling/taskdisplay.css";
import Navbar from "./Navbar";

const Users = () => {
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
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
