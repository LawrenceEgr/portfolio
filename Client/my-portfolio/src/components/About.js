import React from 'react';
import me from '../me.jpg';
import Interests from '../about images/Interests.png';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

  const about ={
    content: 'inherit',
  padding : '5%'
};
const meStyle ={
  padding:'5%'
};
const myPicture ={
  borderRadius:'10%'
}
function About() {
  const history = useNavigate();

  
  return (
    <div>
    <div className="row">
      <div style={about} className="col-sm-8" >
        
         <h1>Hello !<br></br> I'm <span className='span'>LAWRENCE LANGAT</span> <br></br> <b>I'm a frontend web developer</b> and a <b>Mechatronic Engineer </b> </h1>
          <p>I am interested in developing websites while working as a team or individually.
            I have worked on various websites some of which I showcased in my <Link  onClick={() => history.push("projects", { from: "/" })} to='/projects'>Projects</Link>.
            Since I started working in various projects , I have learned that consistency and commitment is all that one needs. Given a task to do
             I will do it faithfully with passion .
          </p>
      </div>
      <div style={meStyle} className="col-sm-4" >
      <div className="card" >
  <img style={myPicture} src={me} className="card-img-top thumbnail" alt=""/>
  <div className="card-body">
    <h5 className="card-title">LANGAT</h5>
    <p className="card-text">"Inspiring someone is like watering a tree nursery."</p>
   
  </div>
</div>
        
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      
      <div className="card-body">
        <h5 className="card-title">TESTIMONIALS
        
        </h5>
        <img src="..." className="card-img-top" alt="..."/>
        <p className="card-text">"I have known Lawrence as among the the best web developers. The projects I have seen him working on are world-class.".</p>
        <p className='card-text'>Sarah DeHUB</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      
      <div className="card-body">
        <h5 className="card-title">INTERESTS</h5>
        <img src={Interests} className="card-img-top" alt="..."/>
        <p className="card-text">These are my main areas of interest among others .</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      
      <div className="card-body">
        <h5 className="card-title">CONTRIBUTIONS</h5>
        <img src="..." className="card-img-top" alt="..."/>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
    </div>
  )

}

export default About