import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../redux/actions/user";
import "../styling/taskdisplay.css";
import Navbar from "./Navbar";

const Users = () => {
  const { users } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
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
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Assigned Project</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, count) => (
            <tr key={user.id}>
              <td>{count + 1}</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
