import React from 'react'
import { useNavigate } from 'react-router-dom'

const ComeOn = () => {

  const navigator = useNavigate();
  return (
    <div>   <div className = "container py-5">
    <div className='d-flex justify-content-center'>

        <h3 className="text-primary">Why are you waiting ! Come on ! </h3>
        <button type="button" className="btn btn-outline-primary ms-3" onClick={()=>{navigator("/projects")}}>Explore Oppertunities</button>
        </div>
    




</div></div>
  )
}

export default ComeOn