import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
import LoginVal from '../compornants/LoginVal'
import axios from 'axios'
import { toast } from 'react-toastify'




const Login = () => {

  const [values, setValues] = useState({

    email: '',
    password: ''

  })

  const {user,setUser}= useContext(UserContext)

  const [errors, setErrors] = useState({})
  const [serverErrors, setServerErrors] = useState({})
  const navigate = useNavigate()

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }






  const handleSubmit = (event) => {
    
    event.preventDefault()
    const errs = LoginVal(values)
    setErrors(errs)
    if (errs.email === "" && errs.password === "") {

      axios.post("http://127.0.0.1:3000/aiesecdb/login", values)
        .then(res => {
          if (res.data.success) {



            toast.success("Login Successfully", {
              position: "top-right",
              autoClose: 5000
            })
            localStorage.setItem("token",res.data.token)
            setUser(res.data.user)
            navigate("/dashboard")

          }

        }
        
      
      ).catch(err => {
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
        background: "linear-gradient(to top, #b5d0f8, #ffffff)", // Adjust gradient colors as needed
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="w-50 my-form"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Adjust opacity and color as needed
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional: Add shadow for depth
        }}
      >
        <div className="text-center mb-4">
          <h2>Log in</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group row mb-4">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                onChange={handleInput}

              />
            </div>
          </div>

          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

          <div className="form-group row mb-4">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                onChange={handleInput}

              />
            </div>
          </div>

          {errors.password && <span className='error' style={{ color: 'red' }}>{errors.password}</span>}


          {serverErrors.length > 0 && (
                serverErrors.map((error, index) => (
                    <p style={{ color: 'red' }} key={index}>{error.msg}</p>
                ))
            )}

         
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login