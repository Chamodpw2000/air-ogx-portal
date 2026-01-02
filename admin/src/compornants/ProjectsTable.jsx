import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';



const ProjectsTable = () => {

  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // You can adjust this number



  const navigate = useNavigate();

  const [projects, setProjects] = useState([])
  useEffect(() => {

    if (loading
    ) {
      axios.get("http://127.0.0.1:3000/aiesecdb/getprojects")
        .then((res) => {
          console.log(res.data);
          setProjects(res.data);
          setLoading(false);

        }).catch((err) => {
          console.log(err);
        })


    }







  }, [loading])




  const deleteRecord = (id) => {
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
        axios.delete(`http://localhost:3000/aiesecdb/deleteproject/${id}`, {
          headers: {
            Authorization: `Berear ${localStorage.getItem("token")}`,
          },
        }).then(() => {
          MySwal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          setLoading(true); // Refresh the data
        }).catch((err) => {
          console.log(err);
        });
      }
    });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container'>


      <table className="table table-striped table-hover">

        <thead>

          <tr>
            <th scope="col" className="px-3 py-2">#</th>
            <th scope="col" className="px-3 py-2">Project</th>
            <th scope="col" className="px-3 py-2">Country</th>
            <th scope="col" className="px-3 py-2">Town</th>

            <th scope="col" className="px-3 py-2">Provider</th>




            <th scope="col" className="px-3 py-2">Actions</th>


          </tr>


        </thead>

        <tbody>
          {currentItems.map((project, index) => (
            <tr key={project._id}>
              <th scope="row" className="px-3 py-2">{index + 1}</th>
              <td className="text-left px-3 py-2">{project.name}</td>
              <td className="text-left px-3 py-2">{project.country}</td>
              <td className="text-left px-3 py-2">{project.town}</td>
              <td className="text-left px-3 py-2">{project.name}</td>
              <td className="px-3 py-2">
                <div className="d-flex gap-2"> {/* Added d-flex and gap-2 classes */}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteRecord(project._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => { navigate("/editproject", { state: project }) }}
                  >
                    Edit Project
                  </button>
                </div>
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







    </div>
  )
}

export default ProjectsTable