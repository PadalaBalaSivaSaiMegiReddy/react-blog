import { Link } from 'react-router-dom';
import './topbar.css';
const TopBar = () => {
  const user=false;
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>     
       <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link to="/" className='link'>HOME</Link></li>
          <li className="topListItem"><Link to="/" className='link'>ABOUT</Link></li>
          <li className="topListItem"><Link to="/" className='link'>CONTACT</Link></li>
          <li className="topListItem"><Link to="/write" className='link'>WRITE</Link></li>
          <li className="topListItem">{user&&"LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user?(<img src="src/assets/LinkedIn_DP.jpg " alt="" className='topImg' />
      ):
      <>
      <Link to="/login" className='link'>LOGIN</Link>
      <Link to="/register" className='link'>REGISTER</Link>
      </>
    
      }

<i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      
      </div>
    </div>
  )
}

export default TopBar