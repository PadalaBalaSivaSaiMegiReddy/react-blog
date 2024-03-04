import { useContext } from "react"
import Topbar from "./components/topbar/Topbar"
import { Context, ContextProvider } from "./context/Context"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Settings from "./pages/settings/Settings"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"

import { Routes, Route } from 'react-router-dom';
import Contact from "./pages/contact/Contact"
import About from "./pages/about/about"



const App = () => {
  const {user}=useContext(Context);
  return (
    <>
    <Topbar/>
    <Routes>
      
    <Route path="/" element={<Home/>}/>  
    <Route path="/contact" element={<Contact/>}/>  
    <Route path="/about" element={<About/>}/>  
    <Route path="/register" element={user?<Home/>:<Register/>}/>  
    <Route path="/login" element={user?<Home/>:<Login/>}/>  
    <Route path="/write" element={user?<Write/>:<Register/>}/> 
    <Route path="/settings" element={user?<Settings/>:<Register/>}/>  
    <Route path="/post/:postId" element={<Single/>}/>  
    
    </Routes>   
    </>    
  )
}

export default App