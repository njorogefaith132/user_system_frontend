import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styling/dashboard.css'
import '../styling/navbar.css'

const Dashboard = () => {
    const history = useHistory();


        if(localStorage.length === 0 ) {
            history.push('/login')
        }
       
   
    return (
        <div>
        <div className="navbar">
           <Link to="/" ><h1>User System</h1></Link>
           <div className="log-reg">
           <Link to="/task"><h2>Add Tasks</h2></Link>

           </div>
        </div>
        <div className="landing-page">
            <div className="project-section">
                <h3>Project Details</h3>

                <h2>Charlie</h2>
                <p>6.	On our users’ program, implement a cron job that checks whether a project task has been in ‘created’ state (not done)
                     for 2 days and above and then sends an email to the user asking them to complete the task </p>
            </div>
            <div className="tasks-section">
                <h4>Tasks</h4>
                <ul>
                    <li>create landing page</li>
                    <li>create landing page</li>
                    <li>create landing page</li>
                </ul>
            </div>

        </div>
        </div>
    )
}

export default Dashboard
