import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { addproject, addProjectAction } from "../redux/actions/project";
import "../styling/project.css";

const Projects = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.project);
  const stateUser = useSelector((state) => state.user);

  console.log("project state user", stateUser);
  console.log("project state project", state);
  console.log(stateUser.user.username);

  const [project, setProject] = useState({
    projectname: "",
    project_description: "",
    username: stateUser.user.username,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProjectAction(project));
  };
  const onChange = (e) => {
    setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (state?.project?.projectname) history.push("/task");
    console.log("<<<<<<<<<<<<<", state.project.projectname);
  }, [state?.project?.projectname]);

  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <h1>User System</h1>
        </Link>
        <div className="log-reg"></div>
      </div>

      <div className="project-form">
        <h3>Add Project</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Project Name</label>
          <input
            type="text"
            placeholder="input username"
            name="projectname"
            onChange={onChange}
          />

          <label htmlFor="">Project Description</label>
          <textarea
            type="text"
            placeholder="input Description"
            name="project_description"
            onChange={onChange}
          />
          <label htmlFor="">Project Lead</label>
          <select name="user" id="" onChange={onChange}>
            <option value="">select user</option>
            <option value="">jimmy</option>
            <option value="">jimmy</option>
          </select>

          <button>Add Project</button>
        </form>
      </div>
    </div>
  );
};

export default Projects;
