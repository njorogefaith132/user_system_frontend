import React from 'react'
import '../styling/project.css'


const Projects = () => {

    return (
        <div className="project-form">
            <form>
            <label htmlFor="">Project Name</label>
            <input type="text" placeholder="input username" />

            <label htmlFor="">Project Description</label>
            <textarea type="text" placeholder="input Description" />

            
            </form>

            
        </div>
    )
}

export default Projects
