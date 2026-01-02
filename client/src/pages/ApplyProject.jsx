import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ApplyVal from '../compornants/ApplyVal.jsx'
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"





const ApplyProject = () => {

  const [user,setUser]= useState();
  useEffect(()=> {
    axios.get("http://127.0.0.1:3000/aiesecdb/verify",{
      headers:{
        Authorization: `Berear ${localStorage.getItem("token")}`
      }
    })
    .then(res=>{
      if(res.data.success){
        setUser(res.data.user)
      }
    }).catch(err=>{
      console.log(err)
    })
  },[])

  
  const navigate = useNavigate()
  
    const [errors, setErrors] = useState({})

    // const [inputs,setinputs]=useState({
    //     age:'',
    //     mobile:'',
    //     motivation:'',


    // })
  
    const [values, setValues] = useState({
        pname: '',
        country: '',
        town: '',
        provider: '',
        description: '',
        duration: '',
        fee: '',
        idd: '',
        age:'',
        mobile:'',
        motivation:'',
        
    })

   




    const { id } = useParams()

    useEffect(() => {


        axios.get("http://127.0.0.1:3000/aiesecdb/getproject/" + id, {
            headers: {
                Authorization: `Berear ${localStorage.getItem("token")}`
            }
        })
            .then((res) => {
                if (res.data.success) {
                    setValues({
                        pname: res.data.name,
                        country: res.data.country,
                        town: res.data.town,
                        provider: res.data.provider,
                        description: res.data.description,
                        duration: res.data.duration,
                        fee: res.data.fee,
                        idd: res.data._id
                    })
                }
            })
            .catch((err) => {
                console.log(err);

            });
    }, [])
    // const combinedPayload = {
    //   userInfo: user,
    //   projectInfo: values
    // };

    const handleSubmit = (event) => {

       
    
        event.preventDefault()
        const errs = ApplyVal(values)
        setErrors(errs)
        if (errs.age === "" && errs.mobile === "" && errs.motivation ==="") {

           
    
          axios.post("http://127.0.0.1:3000/aiesecdb/apply",values,{
            headers:{
              Authorization: `Berear ${localStorage.getItem("token")}`
            }
          }).then(res => {
             
              // console.log(res.data.success)
              if (res.data.success) {
          
          
          
                toast.success("Application Sent Successfully", {
                  position: "top-right",
                  autoClose: 5000
                })
                
                navigate("/dashboard")
          
              }
          
            }
          
            ).catch(err => {
             
                if (err.response.data.errors) {
                  
                  
                  console.log(err)
                }
          
              })
          }
      }
    const handleInput = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
      }
    
  return (
    <div>

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
          <h2>Apply {values ? values.pname : ""} Project</h2>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="form-group row mb-4">
      <label htmlFor="name" className="col-sm-2 col-form-label">
        Name
      </label>
      <div className="col-sm-10 d-flex align-items-center">
        <p className="mb-0">{user ? user.name : "No name provided"}</p>
      </div>
    </div>

          
    <div className="form-group row mb-4">
      <label htmlFor="name" className="col-sm-2 col-form-label">
        Email
      </label>
      <div className="col-sm-10 d-flex align-items-center">
        <p className="mb-0">{user ? user.email : "No name provided"}</p>
      </div>
    </div>

          <div className="form-group row mb-4">
            <label htmlFor="age" className="col-sm-2 col-form-label">
              Age
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                name="age"
                id ="age"
                placeholder="Enter your age in years" 
                onChange={handleInput}

              />
            </div>
          </div>
          {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}

          <div className="form-group row mb-4">
            <label htmlFor="mobile" className="col-sm-2 col-form-label">
              MobileNo
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                name="mobile"
                id ="mobile"
                placeholder="WhatsApp Number Prefered"
                onChange={handleInput}

              />
            </div>
          </div>

            {errors.mobile && <span style={{ color: 'red' }}>{errors.mobile}</span>}

          <div className="form-group row mb-4">
      <label htmlFor="motivation" className="col-sm-2 col-form-label">
        Your motivation to Apply for this Project
      </label>
      <div className="col-sm-10">
        <textarea
          className="form-control"
          name="motivation"
          id="motivation"
          placeholder="Please use about 100 words to describe your motivation to apply for this project."
          style={{ height: '150px' }}
          onChange={handleInput}
        />
      </div>
    </div>

    {errors.motivation && <span style={{ color: 'red' }}>{errors.motivation}</span>}




         
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">
                Apply
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>



    
        


    </div>
  )
}

export default ApplyProject