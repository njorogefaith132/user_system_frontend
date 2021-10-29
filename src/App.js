import {  Route, Switch } from 'react-router';
import './App.css';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Registration from './component/Registration';
import Task from './component/Task'
import Projects from './component/Projects';
import { Link } from 'react-router-dom';
import Home from './component/Home';
import Admin from './component/Admin';
import TasksDisplay from './component/TasksDisplay';
import Users from './component/Users';

function App() {


  return (
    <div className="App">
      <Route path="/" exact component={Home}/>
        <Route  path="/register" component={Registration} /> 
        <Route  path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/admindashboard" component={Admin} />
        <Route path="/tasks" component={TasksDisplay} />
        <Route path="/users" component={Users} />
        <Route path="/task" component={Task} />
        <Route path="/project" component={Projects} />

    </div>
  );
}

export default App;
