import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter,FaInstagram,FaWhatsapp,FaLinkedin,FaGithub } from "react-icons/fa";

import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          
          <a href='https://twitter.com/webgeek254?s=09' className='me-4 text-reset'>
            {/* <i className='fab fa-twitter'></i> */}
            <FaTwitter/>

          </a>
         
          <a href='https://www.instagram.com/starlakila/' className='me-4 text-reset'>
            {/* <i className='fab fa-instagram'></i> */}
            <FaInstagram/>
          </a>
          <a href='https://www.linkedin.com/in/lawrence-langat-333b991b6/' className='me-4 text-reset'>
            {/* <i className='fab fa-linkedin'></i> */}
            <FaLinkedin/>
          </a>
          <a href='https://github.com/LawrenceEgr' className='me-4 text-reset'>
            {/* <i className='fab fa-github'></i> */}
            <FaGithub/>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Personal Opinion
              </h6>
              <p>
               "Web development and web design awakes the creative part of us ."
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Skills</h6>
              <p>Bootstrap</p>
              <p>React</p>
              <p>Javascript</p>
              <p>Sass</p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Navigate</h6>
              <p>
                <Link to='/' className='text-reset'>
                  Home
                </Link>
              </p>
              <p>
                <Link to='about' className='text-reset'>
                 About
                </Link>
              </p>
              <p>
                <Link to='projects' className='text-reset'>
                  Projects
                </Link>
              </p>
              <p>
                <Link to='contact' className='text-reset'>
                 Contact
                </Link>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> Nairobi, Kenya
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                lawrencelangatmi@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 254 790 368 803
              </p>
              
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://github.com/LawrenceEgr?tab=repositories'>
          Lawrence Development
        </a>
      </div>
    </MDBFooter>
  );
}