import AIR from "../assets/images/air.jpg"

import React from 'react'

const AboutHero = () => {
  return (
    <div>

<div class="container col-xxl-8 px-4 py-3">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={AIR} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">AIESEC In University of Ruhuna</h1>
        <p class="lead">AIESEC in Ruhuna is the sole entity in Down South Sri
Lanka! The Local Chapter AIESEC in University of
Ruhuna Down South Sri Lanka, one of the reputed
Universities out of ten in Sri Lanka, which is operating
AIESEC.
We provide you with the opportunity to live a shared
responsibility for the world and equip you with the tools
to shape it for a better future.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">

        </div>
      </div>
    </div>
  </div>




    </div>
  )
}

export default AboutHero