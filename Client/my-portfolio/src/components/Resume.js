import React from 'react';
import { Link } from 'react-router-dom';
import {BsFillArrowDownCircleFill} from "react-icons/bs";

          

function Resume() {
    const body ={
        height:'600px',
        width:'1200px',
        backgroundColor:'grey'
    }
    const header1 ={
        height:'100px',
        width:'1200px',
        backgroundColor:'blue',
        contentAlign:'center'
    }
    return ( 
        <div style={body} className='container'>
           <div style={header1} className='header1'>
            <h1>Resume</h1>
            </div>
            <p>Download Resume <BsFillArrowDownCircleFill/></p>
        </div>
    )
}


export default Resume