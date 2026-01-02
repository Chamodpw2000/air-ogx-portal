import React from 'react'
import { Link } from 'react-router-dom'


const ProjectDetailsIntro = ({values}) => {
  return (
    <div style={{
        background: "linear-gradient(to top, #b5d0f8, #ffffff)", // Adjust gradient colors as needed
        overflow: "hidden",
        position: "relative",
      }}>
        
        <div class="col-lg-8 mx-auto p-3 py-md-5">
  <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
    <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
      <span class="fs-4">{values.name}</span>
    </a>
  </header>

  <main>
    
    <p class="fs-5 col-md-8">{values.description}</p>

  

    <hr class="col-3 col-md-2 mb-5" />

    <div class="row g-5">
    <div className="container my-4 p-4 bg-light rounded-3 shadow-lg">
      <h2 className="text mb-3">Country - <span className="fw-bold">{values.country}</span></h2>
      <h2 className="text mb-3">Town - <span className="fw-bold">{values.town}</span></h2>
      <h2 className="textmb-3">Opportunity Provider - <span className="fw-bold">{values.provider}</span></h2>
      <h2 className="text mb-3">Project Duration - <span className="fw-bold">{values.duration}</span></h2>
      <h2 className="text mb-3">Project Fee - <span className="fw-bold">{values.fee}</span></h2>
    </div>
      <div class="mb-5">
      <Link to={`/applyproject/${values._id}`}>
                  <button type="button" className="btn btn-primary btn-lg px-4">
                    Apply Now
                  </button>
                </Link>
    </div>


    </div>
  </main>
  <footer class="pt-5 my-5 text-muted border-top">
    AIESEC in University of Ruhuna &middot; &copy; 2024
  </footer>
</div>


    <script src="/docs/5.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


    </div>
  )
}

export default ProjectDetailsIntro