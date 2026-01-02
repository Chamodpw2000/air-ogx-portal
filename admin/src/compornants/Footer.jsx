import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#007bff', color: '#ffffff' }} className="py-2">
      <div className="container">
        <div className="row text-center text-md-left">
          {/* About Us Section */}
          <div className="col-md-4 mb-2">
            <h6 className="fw-bold mb-1">About Us</h6>
            <p className="small mb-0">
            AIESEC (Association Internationale des Étudiants en Sciences Économiques et Commerciales) is a global, non-political, independent, and non-profit organization run by young professionals and students. It focuses on developing leadership skills in youth by offering international exchange opportunities and practical experiences in challenging environments. 
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div className="col-md-4 mb-2">
            <h6 className="fw-bold mb-1">Quick Links</h6>
            <ul className="list-unstyled small mb-0">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Projects</a></li>

            </ul>
          </div>
          
          {/* Contact Us Section */}
          <div className="col-md-4 mb-2">
            <h6 className="fw-bold mb-1">Contact Us</h6>
            <address className="small mb-0">
              <div className="d-flex justify-content-center justify-content-md-start align-items-center mb-1">
                <FaHome className="me-1" /> <span>AIESEC , University of Ruhuna , Matara , Sri Lanka</span>
              </div>
              <div className="d-flex justify-content-center justify-content-md-start align-items-center mb-1">
                <FaEnvelope className="me-1" /> <a href="mailto:info@example.com" className="text-white">Ruhuna@aiesec.net</a>
              </div>
              <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                <FaPhone className="me-1" /> <a href="tel:+1234567890" className="text-white">+94703660915</a>
              </div>
            </address>
          </div>
        </div>
        
        {/* Footer Bottom Row */}
        <div className="row mt-2">
          <div className="col text-center">
            <p className="small mb-0">&copy; {new Date().getFullYear()} AIESEC in University of Ruhuna. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
