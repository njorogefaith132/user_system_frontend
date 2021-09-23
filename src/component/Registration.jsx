import React from 'react'
import '../styling/registration.css'
import {useState} from  'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Registration = () => {
    const [usernamereg, setUsernamereg] = useState("")
    const [passwordreg, setPasswordreg] = useState("")

    const register = () =>{
        axios.post("http://localhost:5001/users/register",{

            username: usernamereg,
            password: passwordreg
        }
        ).then(response =>{
            console.log(response);
        })
    }

    return (
        <div>
        <div className="navbar">
           <Link to="/" ><h1>User System</h1></Link>
           <div className="log-reg">
           <Link to="/login"><h2>Login</h2></Link>

           </div>
        </div>
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


            <button onClick={register}>Register</button>
            </form>
        </div>
        </div>
    )
}

export default Registration
