import React from 'react'
import badge from '../assets/images/badge.jpg'
import se2 from '../assets/images/improveyourself.jpg' 
import fd from '../assets/images/expandnetwork.jpg'
import fun from '../assets/images/havefun.jpg'  
import WhyExProd from './WhyExProd'

const WhyExchange = () => {
  return (

<div className="container-fluid px-4  py-5 healthy back">
        <h1 className="text-center display-4  fw-bold text-">Why Exchange Programmes?</h1>
        <div className='container mt-5' >
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <WhyExProd
        Image = {se2}
        Image2 = {badge}
        Title = "Improve Yourself"
        Description = "Improve you with global exchange programes"
        
        
        />

        <WhyExProd
        Image = {fd}
        Image2 = {badge}
        Title = "Expand your network"
        Description = "Have Friends from all over the world"
        
        
        />

<WhyExProd
        Image = {fun}
        Image2 = {badge}
        Title = "Travel and Have Fun"
        Description = "Improve you with global exchange programes"
        
        
        />



        </div>
        </div>

        </div>

    
  )
}

export default WhyExchange