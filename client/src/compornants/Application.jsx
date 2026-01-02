import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { useEffect } from 'react'
import axios from 'axios'


const Application = () => {



     // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // You can adjust this number
    const [applications, setApplications] = useState([])


      useEffect(() => {

        
    
        axios.get("http://127.0.0.1:3000/aiesecdb/getapplications", {
          headers: {
            Authorization: `Berear ${localStorage.getItem("token")}`
          }
        })
          .then((res) => {
            if (res.data.success) {
              setApplications(res.data.applications)
              
            }
          })
          .catch((err) => {
            console.log(err);
    
    
          });
      }, [])


        // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = applications.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(applications.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    
      const deleteRecord = (id) => {
        console.log("id",id)
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
       
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("result",result);
            console.log(localStorage.getItem("token"));

            axios.delete(`http://localhost:3000/aiesecdb/deleteapplication/${id}`, {
              headers: {
                Authorization: `Berear ${localStorage.getItem("token")}`,
              },
            }).then((res) => {
              
                setApplications(res.data.applications);
              
            
            
            MySwal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }).catch((err) => {
            
            console.log(err);
          });
        };
      });
      }

  return (

    
    <div>

{ (applications.length != 0) ?(


<div className="container mt-5">


<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col" className="px-3 py-2">#</th>
      <th scope="col" className="px-3 py-2">Project</th>
      <th scope="col" className="px-3 py-2">Country</th>
      <th scope="col" className="px-3 py-2">Town</th>
      <th scope="col" className="px-3 py-2">Actions</th>
    </tr>
  </thead>
  <tbody>


    {currentItems.map((application, index) => (
      <tr key={application._id}>
        <th scope="row" className="px-3 py-2">{indexOfFirstItem + index + 1}</th>
        <td className="text-left px-3 py-2">{application.project}</td>
        <td className="text-left px-3 py-2">{application.country}</td>
        <td className="text-left px-3 py-2">{application.town}</td>
        <td className="px-3 py-2">
          <button 
            className="btn btn-danger btn-sm"
            onClick={() => deleteRecord(application._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>



<nav aria-label="Page navigation" className="mt-4">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button 
                  className="page-link" 
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li 
                  key={index} 
                  className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  <button 
                    className="page-link" 
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button 
                  className="page-link" 
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
    </div>):(<p className="text-center mt-5 mb-5 p-4 bg-light text-primary border rounded shadow">
  You Still Not Applied For Any Project
</p>)



}



    </div>
  )
}

export default Application