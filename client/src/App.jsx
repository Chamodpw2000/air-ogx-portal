import {BrowserRouter  , Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./compornants/Navbar"
import { createContext, useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./compornants/styles.css"
import "react-toastify/dist/ReactToastify.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import axios from "axios";
import EditProfile from "./pages/EditProfile";
import Logout from "./compornants/Logout";
import ProjectDetils from "./pages/ProjectDetils";
import ApplyProject from "./pages/ApplyProject";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import ProjectsP from "./pages/ProjectsP";
export const UserContext = createContext(null)





function App() {
const [user,setUser]= useState();
useEffect(()=> {
  axios.get("http://127.0.0.1:3000/aiesecdb/verify",{
    headers:{
      Authorization: `Berear ${localStorage.getItem("token")}`
    }
  })
  .then(res=>{
    if(res.data.success){
      setUser(res.data.user)
    }
  }).catch(err=>{
    console.log(err)
  })
},[])

  return (
    <>
     <ToastContainer/>
     <UserContext.Provider value={{user,setUser}}>
    <BrowserRouter>
    
    <Navbar/>
    
    <Routes>

    <Route path = "/" element ={<Home/>}></Route>
    <Route path = "/login" element ={<Login/>}></Route>
    <Route path = "/register" element ={<Register/>}></Route>
    <Route path = "/dashboard" element ={<Dashboard/>}></Route>
    <Route path = "/edit" element ={<EditProfile/>}></Route>
    <Route path = "/logout" element ={<Logout/>}></Route>
    <Route path = "/projectdetails/:id" element ={<ProjectDetils/>}></Route>
    <Route path = "/applyproject/:id" element ={<ApplyProject />}></Route>
    <Route path = "/about" element ={<About />}></Route>
    <Route path = "/faq" element = {<FAQ/>}></Route>
    <Route path = "/projects" element = {<ProjectsP/>}></Route>







    </Routes>
    
    </BrowserRouter>

    
    </UserContext.Provider>
    
    
    
    
    
    
    
    </>
  )
}

export default App
