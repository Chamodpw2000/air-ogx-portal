import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../App'
import axios from 'axios';
import DashboardHero from '../compornants/DashboardHero';
import Projects from '../compornants/Projects';
import Application from '../compornants/Application';
import Footer from '../compornants/Footer';


const Dashboard = () => {

  
  return (<>
  
  
  <DashboardHero/>
  <h2 className="text-center display-3 fw-bold my-5" >
 Your Applications
</h2>
  <Application/>

  <p class="text-center font-weight-bold m-5">
        After you apply for a project our team will contact you with the given details for the next steps of your application process
    </p>
  <h2 className="text-center display-3 fw-bold my-15" >
  You Can Apply Projects Here
</h2>
  <Projects/> 

  

  

  <Footer/>
  
  </>
   
  )
}

export default Dashboard