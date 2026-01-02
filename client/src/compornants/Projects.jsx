import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import axios from "axios";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(4); // Adjust number of projects per page

    useEffect(() => {
        axios.get("http://127.0.0.1:3000/aiesecdb/getprojects")
            .then(res => {
                setProjects(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    // Get current projects
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div style={{
            background: "linear-gradient(to top, #b5d0f8, #ffffff)",
            minHeight: "100vh",
            padding: "20px"
        }}>
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'space-between' 
            }}>
                {currentProjects.map(project => (
                    <div key={project.id} 
                         style={{ margin: '20px', flex: '0 1 calc(50% - 40px)' }}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>

            <nav aria-label="Project pagination" className="mt-4">
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
                    
                    {[...Array(Math.ceil(projects.length / projectsPerPage))].map((_, index) => (
                        <li key={index} 
                            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button
                                className="page-link"
                                onClick={() => paginate(index + 1)}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                    
                    <li className={`page-item ${currentPage === Math.ceil(projects.length / projectsPerPage) ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === Math.ceil(projects.length / projectsPerPage)}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Projects;
