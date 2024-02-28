import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Username</label>
            <input type="text" placeholder='Enter Your Username...' />
            <label>Password</label>
            <input type="password" placeholder='Enter Your Password...' />
            <button className="loginButton" type='submit'>Login</button>
        </form>
            <button className="loginRegisterButton">
              <Link to="/register" className='link'>Register</Link>

            </button>
    </div>
  )
}
