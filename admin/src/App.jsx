import React, { createContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'; // Add this import

export const UserContext = createContext(null)
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './compornants/Navbar';
import Login from './pages/login';
import Logout from './pages/Logout';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import Application from './pages/Application';
import AddOppertunity from './pages/AddOppertunity';
import EditProject from './pages/EditProject';
import AdminHome from './pages/Home';
import Footer from './compornants/Footer';
import RegisterAdmin from './pages/Register';

// 


const App = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    axios.get("http://127.0.0.1:3000/aiesecdb/verifyadmin", {
      headers: {
        Authorization: `Berear ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        if (res.data.success) {
          setUser(res.data.user)
          console.log(res.data.user);
          
        }
      }).catch(err => {
        console.log(err)
      })
  }, [])


  return (


    <div>

      <ToastContainer />
     
     <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>

        
<Navbar/>

          <Routes>


            <Route path="/" element={<AdminHome/>} />
            <Route path="/login" element={<Login/>} />
            <Route path = "/logout" element ={<Logout/>}></Route>
            <Route path = "/dashboard" element ={<Dashboard/>}></Route>
            <Route path = "/application/:id" element ={<Application/>}></Route>
            <Route path = "/addopp" element ={<AddOppertunity/>}></Route>
            <Route path = "/editproject" element ={<EditProject/>}></Route>
            <Route path = "/register" element ={<RegisterAdmin/>}></Route>









          </Routes>






        </BrowserRouter>













      </UserContext.Provider>



    </div>
  )
}

export default App
