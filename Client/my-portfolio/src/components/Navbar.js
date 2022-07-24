import React from 'react' ;
import {Link}    from 'react-router-dom';
import logo from "../logo.jpg" ;
// const nav ={
//   zIndex: '2' 
// };

// // const logo ={
// //   marginLeft: '10%',
// //   width: '70px',
// //   height: '70px',
// //   borderRadius: '100%'
// // }
// const navLink= {
//   fontWeight: '500',
  
//   letterSpacing: '0.0375rem !important',
//   cursor: 'pointer',
//   color: 'rgb(209, 13, 160) !important',
//  textTransform : 'uppercase'
// }
// //  const Link:hover = {
// //   color: 'blue'

// // }
// const navbarSupportedContent={
//  marginLeft: '400px'

// }
//  const navItem ={
//   wordSpacing: '80px !important'
// }
// // .navbar-nav > Link :hover {
// // print-color-adjust: brown;
// // }


//  const navbarBrand={
//    padding:'0'
//  }
// // @media (max-width:768px) {
// //  .navbar-brand{
// //    width : 7rem;
// //  }
 
// // }
// //     .typed-text{
// //      font-size : 1.5rem !important;
    
// //    }

function Navbar() {
  return (
  
    <nav  className ="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a className='nav-brand' href="www.google.com"  ><img className='logo' src={logo} alt=""/> LAWRENCE</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
           
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           

           <Link className='nav-link' to="/">Home</Link>
           <Link className='nav-link' to="about">About</Link>
           <Link className='nav-link' to="projects">Projects</Link>
           <Link className='nav-link' to="resume">Resume</Link>
           <Link className='nav-link' to="contact">Contact</Link>
          
         </div>
        
    </div>
         
      
</nav>
  )
}

export default Navbar ;