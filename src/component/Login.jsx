import React from "react";
import "../styling/login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchinguser } from "../redux/actions/user";

const Login = () => {
  const history = useHistory();
  const  dispatch = useDispatch()


  const state = useSelector(state => state.user)

  const [user, setUser] = useState({
      username: '',
      password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchinguser(user))
  }
  const onChange = (e) =>{
    setUser(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  useEffect(() => {
      if(state?.user?.id) history.push('/project')
    //   console.log('<<<<<<<<<<<',state.user.id); 
  }, [])

  return (
    <div className="login-form">
      <form
        onSubmit={handleSubmit}
      >
        <label htmlFor="">Username</label>
        <input
        name="username"
          type="text"
          placeholder="input username"
          onChange={onChange}
        />

        <label htmlFor="">Password</label>
        <input
        name="password"
          type="text"
          placeholder="input password"
          onChange={onChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
