import React from 'react'
import badge from '../assets/images/badge.jpg'
import epb from '../assets/images/epbuddy.jpg' 
import visa from '../assets/images/visasupport.png'
import ps from '../assets/images/preparationseminar.jpg'  
import WhyExProd from './WhyExProd'

const WhyRuhuna = () => {
  return (
    <div className="container-fluid px-4  py-5 healthy back">
        <h1 className="text-center display-4  fw-bold text-">Why Volunteer With AIESEC in Ruhuna?</h1>
        <div className='container mt-5' >
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <WhyExProd
        Image = {epb}
        Image2 = {badge}
        Title = "EP Buddy"
        Description = "You will be given a EP Buddy to support you during your exchange"
        
        
        
        />

        <WhyExProd
        Image = {visa}
        Image2 = {badge}
        Title = "Visa Support"
        Description = "We'll assist with processing your visa, passport, and all exchange documents."







        
        
        />

<WhyExProd
        Image = {ps}
        Image2 = {badge}
        Title = "Preparation Semminars"
        Description = "We'll provide seminars to help you adapt to the new culture for exchanges."
        
        
        />



        </div>
        </div>

        </div>
  )
}

export default WhyRuhuna