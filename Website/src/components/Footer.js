import React, {useState} from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

	export default function Footer() {
		const [mailerState, setMailerState] = useState({
			name: "",
			email: "",
			message: "",
		});

		function handleStateChange(e){
			setMailerState((prevState) => ({
				...prevState,
				[e.target.name]: e.target.value,
			}));
		}
		const submitEmail = async (e) => {
			e.preventDefault();
			console.log({ mailerState });
			const response = await fetch("https://mattb-site.herokuapp.com/send", {
			  method: "POST",
			  headers: {
				"Content-type": "application/json",
			  },
			  body: JSON.stringify({ mailerState }),
			})
			  .then((res) => res.json())
			  .then(async (res) => {
				const resData = await res;
				console.log(resData);
				if (resData.status === "success") {
				  alert("Message Sent");
				} else if (resData.status === "fail") {
				  alert("Message failed to send");
				}
			  })
			  .then(() => {
				setMailerState({
				  email: "",
				  name: "",
				  message: "",
				});
			  });
		  };
		return(
			<div className="h-auto w-100 d-inline-block footer-div" id="contact">
				<h1 className="center-text">Contact Me</h1>
				<Container>
					<Row>
						<Col xs={12} sm={12} md={6}>
							<div className="contact-div">
								<h2>My Contacts</h2>
								<p>Work Email: matt.a.baldivino@gmail.com</p>
								<p>School Email: mabaldivino@cpp.edu</p>
							</div>
						</Col>
						<Col xs={12} sm={12} md={6}>
							<div className="contact-div">
								<form id="contact-form" onSubmit={submitEmail}>
									<label><h2>Name</h2></label>
									<input required type="text" placeholder="Name" name="name" onChange={handleStateChange} value={mailerState.name}/>
									<br></br>
									<label><h2>Email</h2></label>
									<input required type="email" placeholder="Email" name="email" onChange={handleStateChange} value={mailerState.email}/>
									<br></br>
									<label><h2>Message</h2></label>
									<textarea  required placeholder="Message" name="message" onChange={handleStateChange} value={mailerState.message}></textarea>
									
									<button style={{marginTop: 20}} className="primary-btn submit">Submit</button>
								</form>
							</div>
						</Col>
					</Row>
				</Container>
				<div id="link-div">
					<p id="link-text" style={{verticalAlign: 'middle'}} className="center-text">
						Copyright © Matthew Baldivino	
						<a href="https://www.linkedin.com/in/matthew-baldivino123"><img style={{marginLeft: 10}}className="links" src="https://cdn-icons-png.flaticon.com/512/145/145807.png"/></a>
						<a href="https://github.com/MattBaldivino"><img className="links" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"/></a>						
					</p>
				</div>
			</div>
		)
	} 
	

