import React ,{ useRef }  from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('gmail', 'template_6350lig',e.target , form.current, '3tQczoiCPFh8TTfjD')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset();
	  };
	
  return (
    <div> 
      
      
    <section id="three">
		<h2>Get In Touch</h2>
	    <p>Have any questions or want to work together on a future project? Please fill out the form below, shoot me an email me, or give me a call. I look forward to hearing from you!</p>
		<div class="row">
			<div class="col-8 col-12-small">
				<form ref={form} onSubmit={sendEmail}>
                     <label>Name: </label>
                     <input type="text" name="user_name" placeholder='Enter your name' required />
					 <br></br><hr></hr>
                     <label>Email :</label>
                     <input type="email" name="user_email" placeholder='EX : rexamine@gmail.com' required/>
					 <br></br><hr></hr>
                     <label>Message :</label>
                     <textarea name="message" />
<hr></hr>

                     <input type="submit" value="Send" id='send' />
                </form>
			</div>
			<div class="col-4 col-12-small" id='mine'>
             
			  <p>
                <i className='fas fa-envelope me-3'></i>
                lawrencelangatmi@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 254 790 368 803
              </p>
			</div>
		</div>
	  </section>
	 


 


    </div>
	
  )
}

export default  Contact 