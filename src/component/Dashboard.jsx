import React from 'react'
import '../styling/dashboard.css'

const Dashboard = () => {
    return (
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
    )
}

export default Dashboard
