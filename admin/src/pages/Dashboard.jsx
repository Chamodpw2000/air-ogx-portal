import React from 'react'
import Application from '../compornants/AllApplications'
import { Link } from 'react-router-dom'
import ProjectsTable from '../compornants/ProjectsTable'
import Footer from '../compornants/Footer'
const Dashboard = () => {
  return (

<div>  <div className='container'>
      <h2 className="text-center display-3 fw-bold my-5" >
        Applications For Projects
      </h2>
      <Application />

      <div className="d-flex justify-content-center w-100">
        <Link to="/addopp" className="w-100 text-center">
          <button type="button" className="btn btn-outline-primary me-2 my-5 w-50">
            Add Opportunity
          </button>
        </Link>
      </div>


      <h2 className="text-center display-3 fw-bold my-5" >

        Available Projects
      </h2>

      <ProjectsTable />


    </div>

    <Footer />
    </div>  



  )
}

export default Dashboard