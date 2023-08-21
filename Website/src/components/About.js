import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(){
	return(
		<div className="p-3 h-auto d-inline-block" id="about">
			<Container>
      				<Row>
        				<Col>				
						<img id="pfp" className="center" src="https://media.licdn.com/dms/image/D5603AQEam3QFx7Ve-w/profile-displayphoto-shrink_800_800/0/1680311393029?e=2147483647&v=beta&t=KUrDQaWLAPOaeZaiTn0faqDiezzYNEnVCejhNQXje0I"/>
					</Col>
        				<Col>
						<div id="about-text">
							<h2 >Matthew Baldivino</h2>
							<p></p>
							<h3 >Cal Poly Pomona, Class of 2025, Computer Science Major</h3>
							<p></p>
							<p>
								I am currently learning full stack web development and have an interest in learning software development. I have a passion for programming
								and math.
							</p>
							<p>
								Away from the keyboard, my interests include table tennis, weightlifting, and music. On campus I am the president of
								Bronco Table Tennis, and a member of Students With An Interest In Future of Technology(SWIFT) and Bronco Lifting.
							</p>
						</div>
						
					</Col>
      				</Row>
    			</Container>
		</div>
	)
}

export default About;