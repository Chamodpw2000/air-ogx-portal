import React from 'react'
import GV from "../assets/images/GV.jpg";


const ProjectDetailsHero = ({values}) => {
  return (
    <div>
      <div className="container my-5" style={{ marginTop: '150px' }}> {/* Adjust the marginTop value as needed */}
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1">Welcome to {values.name} Project!</h1>
    
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src={GV} alt="" width="720"/>
        </div>
      </div>
    </div>  



    </div>
  )
}

export default ProjectDetailsHero