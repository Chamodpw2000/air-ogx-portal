import React, { useEffect, useState } from 'react'
import axios from "axios"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import EditValidation from '../compornants/EditValidation'





const EditProfile = () => {


  const [values, setValues] = useState({
    name: "",
    email: "",
    
  
  })

  const [errors, setErrors] = useState({})
  const [serverErrors, setServerErrors] = useState([])
  const navigate = useNavigate()
  const [profile, setProfile] = useState([])

  useEffect(() => {


    axios.get("http://127.0.0.1:3000/aiesecdb/getprofile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => {
        if (res.data.success) {

          const profileData = res.data.profile1
          setProfile(profileData)

          setValues({
            name: profileData.name,
            email: profileData.email
          })
          console.log(profile)


        }
      })
      .catch((err) => {
        console.log("Error is", err);

        console.log(err);

      });
  }, [])



  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleCancel = () => {

    navigate("/dashboard")

  }


  const handleSubmit = (e) => {

    e.preventDefault()
    const errs = EditValidation(values)
    setErrors(errs)

    console.log(errs)
    console.log("hi")

    if (errors.name === "" && errors.email === ""  ) {

      axios.put("http://127.0.0.1:3000/aiesecdb/editprofile/", values,

        {
            headers: {
              Authorization: `Berear ${localStorage.getItem("token")}`
            }
          }



      )
        .then(res => {

          console.log(res.data.success)
          if (res.data.success) {



            toast.success("Profile Updated Successfully", {
                position: "top-right",
                autoClose: 5000
              })
              navigate("/dashboard")
          }
          else{

            

            toast.success("No Changers Made", {
              position: "top-right",
              autoClose: 5000
            })


            navigate("/dashboard")



        }

        }).catch(err => {
          if (err.response.data.errors) {
            setServerErrors(err.response.data.errors)
          } else {



            console.log(err)
          }

        });
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
        className="w-50 my-form"
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="text-center mb-4">
          <h2>Edit Your Account</h2>

        </div>
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

        <div className="form-group row mb-4">
          <label htmlFor="name" className="col-sm-2 col-form-label">Name </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="name" onChange={handleInput} placeholder="Name" value={values.name}/>
          </div>
        </div>
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

        <div className="form-group row mb-4">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" name="email" onChange={handleInput} placeholder="Email" value={values.email}/>
          </div>
        </div>

       



       
        {
          serverErrors.length > 0 && (
            serverErrors.map((error, index) => (
              <p key={index} style={{ color: 'red' }}>{error.msg}</p>
            ))
          )
        }

<div className="form-group row">
  <div className="col-sm-10 offset-sm-2 d-flex">
    <button 
      type="submit" 
      className="btn btn-primary" 
      onClick={handleSubmit}
    >
      Update
    </button>
    <button 
      type="button" 
      className="btn btn-danger ms-2" 
      onClick={handleCancel}
    >
      Cancel
    </button>
  </div>
</div>
      </form>
    </div>)
}

export default EditProfile