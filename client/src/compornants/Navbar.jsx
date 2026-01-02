import React, { useContext } from 'react'
import Logo from "../assets/images/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App.jsx'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'





const Navbar = () => {

  

  const { user } = useContext(UserContext)

  return (


    

    
    <div>


      
      <div className="container-fluid px-5 header fixed-top">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
          <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src={Logo} alt="" className="w-50 h-50" />
          </a>

          {

              user ? (

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" className="nav-link px-2 menu-color">Home</a></li>
                <li><a href="/dashboard" className="nav-link px-2 menu-color">Dashboard</a></li>
                <li><a href="/faq" className="nav-link px-2 menu-color">FAQs</a></li>
                <li><a href="/about" className="nav-link px-2 menu-color">About</a></li>
               

              </ul>





              ):
              
              
              (

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" className="nav-link px-2 menu-color">Home</a></li>
                <li><a href="/projects" className="nav-link px-2 menu-color">Projects</a></li>
                <li><a href="/faq" className="nav-link px-2 menu-color">FAQs</a></li>
                <li><a href="/about" className="nav-link px-2 menu-color">About</a></li>
              </ul>



              )


          }
      


          {

            user ? (



              <div className="col-md-3 text-end">
                
                <Link to="/logout">
                  <button type="button" className="btn btn-outline-primary me-2">
                    Logout
                  </button>
                </Link>
                

                <Link to="/edit">
                  <button type="button" className="btn btn-outline-primary me-2">
                    Edit Profile
                  </button>
                </Link>


                


              </div>





            ) : (


              <div className="col-md-3 text-end">
                <Link to="/login">
                  <button type="button" className="btn btn-outline-primary me-2">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button type="button" className="btn btn-outline-primary me-2">
                    Register
                  </button>
                </Link>
              </div>







              )



          }
          
        </header>
      </div>
      {/* Add padding-top to create space for the fixed navbar */}
      <div style={{ paddingTop: '5rem' }}>
        {/* Your other content here */}
      </div>
    </div>
  )
}

export default Navbar