import React from 'react'
import faq from '../assets/images/Faq.jpg'

const Faq = () => {



  return (
    <div>

<section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row gy-5 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6">
            <img
              className="img-fluid rounded"
              loading="lazy"
              src={faq}
              alt="How can we help you?"
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-end">
              <div className="col-12 col-xl-11">
                <h2 className="h1 mb-3">How can we help you?</h2>
                <p className="lead fs-4 text-secondary mb-5">
                  We hope you have found an answer to your question. If you need any help, please search your query on our Support Center or contact us via email.
                </p>
         <div className="accordion accordion-flush" id="accordionExample">

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        What is the AIESEC Exchange Program?
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        AIESEC Exchange is a global opportunity that allows young people to gain international exposure through volunteering, teaching, or professional work experiences. Programs focus on leadership development, cultural exchange, and contributing to the UN Sustainable Development Goals.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Who can apply for AIESEC exchange programs?
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        Students and graduates aged 18–30 are eligible to apply. Applicants should be open-minded, motivated, and willing to adapt to a new culture. Specific opportunities may have additional requirements.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        What types of exchange programs does AIESEC offer?
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        AIESEC offers three main exchange programs: Global Volunteer (short-term volunteering projects), Global Teacher (teaching opportunities), and Global Talent (professional internships).
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseFour"
        aria-expanded="false"
        aria-controls="collapseFour"
      >
        What costs are involved in an exchange?
      </button>
    </h2>
    <div
      id="collapseFour"
      className="accordion-collapse collapse"
      aria-labelledby="headingFour"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        Costs may include an AIESEC program fee, visa fees, flight tickets, and personal expenses. Some opportunities provide accommodation or meals. Details vary by project and country.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseFive"
        aria-expanded="false"
        aria-controls="collapseFive"
      >
        Is accommodation provided during the exchange?
      </button>
    </h2>
    <div
      id="collapseFive"
      className="accordion-collapse collapse"
      aria-labelledby="headingFive"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        Most Global Volunteer projects provide accommodation or assist participants in finding housing. The details will be clearly mentioned in the opportunity description.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseSix"
        aria-expanded="false"
        aria-controls="collapseSix"
      >
        How long do exchange programs last?
      </button>
    </h2>
    <div
      id="collapseSix"
      className="accordion-collapse collapse"
      aria-labelledby="headingSix"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        Global Volunteer projects usually last 6–8 weeks, while Global Teacher and Global Talent opportunities can range from 8 weeks to 12 months depending on the role.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseSeven"
        aria-expanded="false"
        aria-controls="collapseSeven"
      >
        What support does AIESEC provide during the exchange?
      </button>
    </h2>
    <div
      id="collapseSeven"
      className="accordion-collapse collapse"
      aria-labelledby="headingSeven"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        AIESEC provides support before, during, and after the exchange, including preparation sessions, visa guidance, local support from host committees, and reintegration activities.
      </div>
    </div>
  </div>

</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>




        
    </div>
  )
}

export default Faq