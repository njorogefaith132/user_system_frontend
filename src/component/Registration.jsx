import React from 'react'
import '../styling/registration.css'
import {useState} from  'react'
import axios from 'axios'

const Registration = () => {
    const [usernamereg, setUsernamereg] = useState("")
    const [passwordreg, setPasswordreg] = useState("")
    const [projectNamereg, setProjectNamereg] = useState("")

    const register = () =>{
        axios.post("http://localhost:5001/users/register",{

            username: usernamereg,
            password: passwordreg,
            project: projectNamereg,
        }
        ).then(response =>{
            console.log(response);
        })
    }

    return (
        <div className="registration-form">
             <form onSubmit={(e) =>{
                 e.preventDefault()
             }}>
            <label htmlFor="">Username</label>
            <input type="text"  
            onChange={(e) =>{
               setUsernamereg(e.target.value)
            }} 
            placeholder="input username" />

            <label htmlFor="">Password</label>
            <input type="text" 
            onChange={(e) =>{
                setPasswordreg(e.target.value)
             }} 
            placeholder="input password" />

            <label htmlFor="">Project Name</label>
            <input type="text"
            onChange={(e) =>{
                setProjectNamereg(e.target.value)
             }} 
            placeholder="input project name" />

            <button onClick={register}>Register</button>
            </form>
        </div>
    )
}

export default Registration
