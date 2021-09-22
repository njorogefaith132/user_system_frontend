import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
           <Link to="/" ><h1>User System</h1></Link>
           <div className="log-reg">
           <Link to="/login"><h2 className="login">Login</h2></Link>
           <Link to="/Register"><h2>Register</h2></Link>

           </div>
        </div>
    )
}

export default Navbar
