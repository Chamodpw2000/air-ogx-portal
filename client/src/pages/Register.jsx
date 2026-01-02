import React, { useState } from 'react'
import Validation from '../compornants/Validation'
import axios from "axios"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"




const Register = () => {


  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    gender: ""
  })

  const [errors, setErrors] = useState({})
  const [serverErrors, setServerErrors] = useState([])
  const navigate = useNavigate()

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }


  const handleSubmit = (e) => {

    e.preventDefault()
    const errs = Validation(values)
    setErrors(errs)

    if (errors.name === "" && errors.email === "" && errors.password === "" && errors.gender === "") {

      axios.post("http://127.0.0.1:3000/aiesecdb/register", values)
        .then(res => {

          console.log(res.data.success)
          if (res.data.success) {



            toast.success("Account Created Successfully", {
              position: "top-right",
              autoClose: 5000
            })

            navigate("/login")
          }

        }).catch(err => {
          if (err.response.data.errors) {
            setServerErrors(err.response.data.errors)
          } else {



            console.log(err)
          }

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
          <h2>Create New Account</h2>

        </div>
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

        <div className="form-group row mb-4">
          <label htmlFor="name" className="col-sm-2 col-form-label">Name :</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="name" onChange={handleInput} placeholder="Name" />
          </div>
        </div>
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

        <div className="form-group row mb-4">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" name="email" onChange={handleInput} placeholder="Email" />
          </div>
        </div>

        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}

        <div className="form-group row mb-4">
          <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" name="password" onChange={handleInput} placeholder="Password" />
          </div>
        </div>

        {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}


        <fieldset className="form-group mb-4">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" onChange={handleInput} value="M" />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" onChange={handleInput} value="F" />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        {
          serverErrors.length > 0 && (
            serverErrors.map((error, index) => (
              <p key={index} style={{ color: 'red' }}>{error.msg}</p>
            ))
          )
        }

        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </div>
      </form>
    </div>)
}

export default Register