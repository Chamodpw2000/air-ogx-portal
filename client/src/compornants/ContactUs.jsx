import React from 'react'
import Chamod from "../assets/images/Chamod.jpeg"
import Tiran from "../assets/images/Tiran.jpeg"
import Sathsara from "../assets/images/Sathsara.jpeg"


const ContactUs = () => {
  return (
    <div>
<h1 className="display-4 fw-bold text-center mx-5 my-5">Contact Us!</h1>


<div class="container marketing">
  <div class="row">
    <div class="col-lg-4 d-flex flex-column align-items-center">
      <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
        <image href={Chamod} x="-70" y="-55" width="350" height="350" clipPath="circle(100%)" />
      </svg>
      <h2>Chamod Wanigasekara</h2>
      <p>LCVP PM</p>
      <p>chamodwanigasekara@aiesec.net</p>
      <p>+94703660915</p>
    </div>
    <div class="col-lg-4 d-flex flex-column align-items-center">
      <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
        <image href={Sathsara} x="-180" y="-135" width="520" height="520" clipPath="circle(100%)" />
      </svg>
      <h2>Sathsara Soysa</h2>
      <p>LCP</p>
      <p>sathsara.soysa@aiesec.net</p>
      <p>+94743136720</p>
    </div>
    <div class="col-lg-4 d-flex flex-column align-items-center">
      <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
        <image href={Tiran} x="-165" y="-115" width="450" height="450" clipPath="circle(100%)" />
      </svg>
      <h2>Tiran Sarith</h2>
      <p>LCP F&L</p>
      <p>tiran.wijerathna@aiesec.net</p>
      <p>+94764821572</p>
    </div>
  </div>
</div>



        
    </div>
  )
}

export default ContactUs