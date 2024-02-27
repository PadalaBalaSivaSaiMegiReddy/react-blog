import { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [cats,setCat]=useState([]);
  useEffect(()=>{
    const getCats=async()=>{
      const res=await axios.get("http://localhost:5000/api/categories")
      setCat(res.data)

    }
    getCats()
    console.log(cats)
  },[])
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="src/assets/DSC_0320.JPG"
          alt=""/>
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c)=>(
            <Link className='link' to={`?cat=${c.name}`}>
            <li className="sidebarListItem">{c.name}</li>
            </Link>

          ))}
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          </div>

        </div>
    </div>
  )
}

export default SideBar