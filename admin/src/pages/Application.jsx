import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

const Application = () => {


 
  const [data, setData] = useState();
  const location = useLocation();

  useEffect(() => {
    console.log(location.state);
    setData(location.state);
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(to top, #b5d0f8, #ffffff)",
        minHeight: "calc(100vh - 56px)", // Subtract navbar height
        marginTop: "56px", // Add margin equal to navbar height
        overflow: "auto",
        position: "relative",
        padding: "20px 0"
      }}
    >
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Review the Application</h2>
        </div>

        <div className="card shadow-lg p-4" style={{ fontSize: "25px", borderRadius: "10px" }}>
          <p>
            <strong>Applicant's Name - </strong> {data?.name}
          </p>
          <p>
            <strong>Applied Project - </strong> {data?.project}
          </p>
          <p>
            <strong>Email -</strong> {data?.email}
          </p>
          <p>
            <strong>Mobile -</strong> {data?.mobile}
          </p>
          <p>
            <strong>Motivation -</strong> {data?.motivation}
          </p>
          <p>
            <strong>Age -</strong> {data?.age}
          </p>
          <p>
            <strong>Country -</strong> {data?.country}
          </p>
          <p>
            <strong>Town -</strong> {data?.town}
          </p>



{data?.dateapp ? (
  <p>
    <strong>Applied Date - </strong> 
    {format(new Date(data.dateapp), 'EEEE, MMM dd, yyyy HH:mm:ss')}
  </p>
) : null}


  
  

  


        </div>

        <div className="text-center mt-4">
          <Link to="/dashboard">
            <button className="btn btn-primary">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Application;
