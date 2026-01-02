import React, { useState } from 'react'

import axios from "axios"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import ProjectValidation from '../compornants/ProjectValidation'
import { useLocation } from 'react-router-dom'



const EditProject = () => {

    const location = useLocation()

    


  const [values, setValues] = useState({

    _id : location.state._id,
    name: location.state.name,
    country: location.state.country,
    town: location.state.town,
    provider: location.state.provider,
    
    description: location.state.description,
    duration : location.state.duration,
    fee: location.state.fee
    
  })
  
 


  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }




  const handleSubmit = (e) => {



    e.preventDefault()
    const errs = ProjectValidation(values)
    setErrors(errs)

    if (errors.name === "" && errors.country === "" && errors.town === "" && errors.provider === ""  && errors.description ==="", errors.duration ==="", errors.fee ==="" ) {
     console.log("inside");
      axios.post("http://127.0.0.1:3000/aiesecdb/addopp", values)
        .then(res => {
            
          console.log(res.data.success)
          if (res.data.success) {



            toast.success("Oppertunity Edited Successfully", {
              position: "top-right",
              autoClose: 5000
            })

            navigate("/dashboard")
          }

        }).catch(err => {
          


            console.log(err)
          

        })
    }

    
  }


  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100" 
      style={{
        background: "linear-gradient(to top, #b5d0f8, #ffffff)",
        overflow: "hidden",
        position: "relative",
      }}
     
    >
      <form
        className="w-50 my-form my-50"
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          margin: "0px"
        }}
      >
        <div className="text-center mb-4">
          <h2>Edit the Opportunity</h2>

        </div>
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

        <div className="form-group row mb-4">
          <label htmlFor="name" className="col-sm-2 col-form-label">Project </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="name" value={values.name} onChange={handleInput}  />
          </div>
        </div>
        {errors.country && <span style={{ color: 'red' }}>{errors.country}</span>}

        <div className="form-group row mb-4">
          <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="country" value={values.country} onChange={handleInput}  />
          </div>
        </div>

        {errors.town && <span style={{ color: 'red' }}>{errors.town}</span>}

        <div className="form-group row mb-4">
          <label htmlFor="town" className="col-sm-2 col-form-label">Town</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="town" onChange={handleInput} value={values.town}  />
          </div>
        </div>

        {errors.provider && <span style={{ color: 'red' }}>{errors.provider}</span>}
        <div className="form-group row mb-4">
          <label htmlFor="provider" className="col-sm-2 col-form-label" >Opp. Provider</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="provider" value={values.provider} onChange={handleInput}  />
          </div>
        </div>


        {errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}
        <div className="form-group row mb-4">
          <label htmlFor="description" className="col-sm-2 col-form-label" >Description</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="description" onChange={handleInput} value={values.description}  />
          </div>
        </div>

        {errors.duration && <span style={{ color: 'red' }}>{errors.duration}</span>}
        <div className="form-group row mb-4">
          <label htmlFor="duration" className="col-sm-2 col-form-label" >Duration</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="duration" onChange={handleInput} value={values.duration} />
          </div>
        </div>

        {errors.fee && <span style={{ color: 'red' }}>{errors.fee}</span>}
        <div className="form-group row mb-4">
          <label htmlFor="fee" className="col-sm-2 col-form-label" >Project Fee</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="fee" onChange={handleInput} value={values.fee} />
          </div>
        </div>

       
       

        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">Edit Oppertunity</button>
          </div>
        </div>
      </form>
    </div>)
}

export default EditProject