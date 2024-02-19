import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import './home.css'

const Home = () => {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    const fetchPosts=async()=>{
      const response=await axios.get('http://localhost:5000/api/posts');
      setPosts(response.data)
    }
    fetchPosts()
  },[])
  return (
    <>
        <Header/>
        <div className="home">
            <Posts posts={posts}/>
            <SideBar/>
        </div>
    </>
  )
}

export default Home