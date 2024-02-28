import { Link } from 'react-router-dom'
import './register.css'
import { useState } from 'react'

export default function Register() {
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPasswrod]=useState('');
  console.log(username);
  console.log(email);
  console.log(password);
  function handleSubmit(e){
    e.preventDefault()

  }

  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
            <input onChange={e=>setUsername(e.target.value)} type="text" placeholder='Enter Your Username...' />
            <label>Email</label>
            <input onChange={e=>setUsername(e.target.value)} type="email" placeholder='Enter Your Email...' />
            <label>Password</label>
            <input  onChange={e=>setUsername(e.target.value)}  type="password" placeholder='Enter Your Password...' />
            <button className="registerButton">Register</button>
        </form>
            <button type='submit' className="registerLoginButton">
              <Link to="/login" className='link'>Login</Link>
            </button>
    </div>
  )
}
