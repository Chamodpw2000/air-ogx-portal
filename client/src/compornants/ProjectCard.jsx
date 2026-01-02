import { Link } from 'react-router-dom'
import { UserContext } from '../App.jsx'

import React, { useContext } from 'react'

const ProjectCard = ({project}) => {

    const {name, country, town, provider, description, duration, fee, _id} = project

    const { user } = useContext(UserContext)

  return (
   
<div className="card">
      <h5 className="card-header">{name}</h5>
      <div className="card-body">
        <h5 className="card-title">{country}, {town}</h5>
        <p className="card-text">{description}</p>
        {user && (
          <Link to={`/projectdetails/${_id}`}>
            <button type="button" className="btn btn-primary me-2">
              More Details
            </button>
          </Link>
        )}
      </div>
    </div>
    
  )
}

export default ProjectCard