import "../styling/task.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addTask } from "../redux/actions/task";

import "../styling/navbar.css";
import { Link } from "react-router-dom";

const AddTask = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.task);
  const projstate = useSelector((state) => state.project);

  console.log("tast state project", projstate);
  console.log("task state task", state);
  console.log(projstate.project.projectname);
  console.log(state.addedtask.task);

  const [task, setTask] = useState({
    projectname: projstate.project.projectname,
    taskname: "",
    start_date: "",
    end_date: "",
  });

  const handleChange = (e) => {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    console.log({ task });
  };

  useEffect(() => {
    if (state?.task?.taskname) history.push("/dashboard");
    // console.log("<<<<<<<<<<<<<", state.task.taskname);
  }, [state?.task?.taskname]);

  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <h1>User System</h1>
        </Link>
        <div className="log-reg">
          <Link to="/login">
            <h2>Login</h2>
          </Link>
        </div>
      </div>
      <div className="task-form">
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Task Name</label>
          <input
            type="text"
            name="taskname"
            placeholder="input task"
            onChange={handleChange}
          />
          <input
            type="date"
            name="start_date"
            placeholder="input task start date"
            onChange={handleChange}
          />
          <input
            type="date"
            name="end_date"
            placeholder="input task end date"
            onChange={handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};
export default AddTask;
