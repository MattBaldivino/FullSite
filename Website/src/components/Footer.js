import React, {useState} from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';



	export default function Footer() {

		const [recipient_email, setEmail] = useState("");
		const [subject, setSubject] = useState("");
		const [message, setMessages] = useState("");

		function sendMail(){
			if(recipient_email && subject && message){
				axios.post(process.env.PORT || "https://localhost:3000/send_email", {
					recipient_email,
					subject,
					message,
				}).then(() => alert('Message sent successfully'))
				.catch(() => alert("Message unsuccessful."))
				return;
			}
			return alert("Fill in every field to continue");
		}
	      
			return(
				<div className="h-auto w-100 d-inline-block footer-div" id="contact">
					<h1 style={{fontSize: 100, padding: 70}} className="Contact center-text">Contact Me</h1>
					<Container>
						<Row>
							<Col>
								<div className="contact-div">
									<form id="contact-form">

										<label htmlFor="email"><p>Email</p></label>
										<input required type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>

										<label htmlFor="name"><p>Subject</p></label>
										<input required type="text" onChange={(e) => setSubject(e.target.value)}/>
									
										<label htmlFor="message"><p>Message</p></label>
										<textarea  required name="message" rows="3" onChange={(e) => setMessages(e.target.value)}></textarea>
									
										<button  style={{marginTop: 20}} onClick={() => sendMail()} className="primary-btn submit">Submit</button>

									</form>
								</div>
							</Col>
							<Col>
								<div className="contact-div">
									<h3>My Contacts</h3>
									<p>Work Email: matt.a.baldivino@gmail.com</p>
									<p>School Email: mabaldivino@cpp.edu</p>
								</div>
							</Col>
						</Row>
					</Container>
					<div id="link-div">
						<p id="link-text" style={{padding: 25, fontSize: 14, verticalAlign: 'middle'}} className="center-text">
							Copyright © Matthew Baldivino
							<a href="https://www.linkedin.com/in/matthew-baldivino123"><img style={{marginLeft: 10}}className="links" src="https://cdn-icons-png.flaticon.com/512/145/145807.png"/></a>
							<a href="https://github.com/MattBaldivino"><img className="links" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"/></a>
							
						</p>
					</div>
				</div>
			)
	} 
	

