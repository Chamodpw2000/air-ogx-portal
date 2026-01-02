import React, { useContext, useEffect } from 'react'
import { UserContext } from '../App'
import volunteer from "../assets/images/volunteer.jpg"
import { Link } from 'react-router-dom'



const DashboardHero = () => {
    const { user } = useContext(UserContext)
    
    
  return (
    <div>


<div>
      { user ? ( <div className="container col-xxl-15 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={volunteer} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Hello  {user.name} ! Welcome to AIESEC in Ruhuna OGV Potral</h1>
        <p className="lead">Explore opportunities for volunteering abroad and make a global impact while immersing yourself in a new culture. Whether you're interested in teaching, wildlife conservation, or community development, volunteering abroad offers a unique chance for personal growth and cultural exchange. Discover a variety of programs that match your interests and skills, and embark on a meaningful journey that benefits communities worldwide. Explore here to find your perfect volunteer opportunity.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">

       
          
        </div>
      </div>
    </div>
  </div>):("")}
      
     


    </div>

        
    </div>
  )
}

export default DashboardHero