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

function App() {


  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Projects/> */}

      
        <Route exact path="/register" component={Registration} /> 
        <Route exact path="/login" component={Login} /> 
        <Route path="/"  component={Home} /> 

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/task" component={Task} />
        <Route path="/project" component={Projects} />


    </div>
  );
}

export default App;
