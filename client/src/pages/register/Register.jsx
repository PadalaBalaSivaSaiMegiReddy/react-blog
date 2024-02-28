import { Link } from 'react-router-dom'
import './register.css'
import { useState } from 'react'
import axios from 'axios';

export default function Register() {
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState(false);
  const handleSubmit=async (e)=>{
    e.preventDefault();
    setError(false)
    try{
      const res=await axios.post('http://localhost:5000/api/auth/register',{
        username,
        email,
        password,
      });
      res.data&&window.location.replace("/login")
    }catch(e){
      setError(true)
    }

  }

  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
            <input onChange={e=>setUsername(e.target.value)} type="text" placeholder='Enter Your Username...' />
            <label>Email</label>
            <input onChange={e=>setEmail(e.target.value)} type="email" placeholder='Enter Your Email...' />
            <label>Password</label>
            <input  onChange={e=>setPassword(e.target.value)}  type="password" placeholder='Enter Your Password...' />
            <button className="registerButton">Register</button>
        </form>
            <button type='submit' className="registerLoginButton">
              <Link to="/login" className='link'>Login</Link>
            </button>
            {error&&<span style={{color: 'red',marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  )
}
