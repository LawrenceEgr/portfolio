import React from 'react';
import Auction from "../project images/Investors2.png"
import Physic from "../project images/1.png"


function Projects() {
  return (
    <div>
		
			<b>THE FOLLOWING ARE THE MOST PERSONAL PROJECTS I WORKED ON :</b>
			<br></br>
			<hr></hr>
			<br></br>
			<div className="row">
				<div className="col-xl-6 col-sm-6" id='auction'
				>
					<img src={Auction} className="img" alt=""/>
				</div>
				
				<div className="col-xl-6 col-sm-6" id='physic'>
					<img src={Physic} className="img" alt=""/>
				</div>
			</div>
		



    </div>
  )
}

export default Projects