import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(){
	return(
		<div className="p-3 h-auto d-inline-block" id="about">
			<Container className="about-contents">
      			<Row>
        			<Col sm={12} md={6}>				
						<img id="pfp" className="center" src="https://media.licdn.com/dms/image/D5603AQEam3QFx7Ve-w/profile-displayphoto-shrink_800_800/0/1680311393029?e=2147483647&v=beta&t=KUrDQaWLAPOaeZaiTn0faqDiezzYNEnVCejhNQXje0I"/>
					</Col>
        			<Col sm={12} md={6}>
						<div id="about-text">
							<h2 >Matthew Baldivino</h2>
							<br></br>
							<h3 >Cal Poly Pomona, Class of 2025, Computer Science Major</h3>
							<br></br>
							<p>
								Aspiring web developer and software engineer. I am currently an Assistant Center
								Director at a Mathnasium Learning Center. On campus I am the president of Bronco
								Table Tennis.
							</p>
						</div>	
					</Col>
      			</Row>
    		</Container>
		</div>
	)
}

export default About;