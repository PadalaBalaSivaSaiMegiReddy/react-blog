import { Link } from 'react-router-dom'
import './login.css'
import {useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Login() {
  const userRef=useRef();
  const passwordRef=useRef();
  const{user,dispatch,isFetching}=useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(user)
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input ref={userRef} type="text" placeholder='Enter Your Username...' />
            <label>Password</label>
            <input ref={passwordRef}  type="password" placeholder='Enter Your Password...' />
            <button className="loginButton" type='submit'>Login</button>
        </form>
            <button className="loginRegisterButton">
              <Link to="/register" className='link'>Register</Link>

            </button>
    </div>
  )
}
