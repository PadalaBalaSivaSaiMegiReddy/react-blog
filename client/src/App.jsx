import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Settings from "./pages/settings/Settings"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"

import { Routes, Route } from 'react-router-dom';



const App = () => {
  const user=false;
  return (
    <>
    <Topbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>  
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