import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills(){
	return(
		<div className="h-auto d-inline-block" id="skills-div">
			<Container>
				<h1 style={{fontSize: 100}} className="center-text skills-header">Skills</h1>
				<Row>
					<Col>
						<h3 style={{fontSize: 50}} className="center-text skill-title">Java</h3>
						<p style={{ textAlign: "left"}}>Starting in high school, I've racked up 4 years of experience in Java. This includes
						learning object oriented programming, implementing data structures, and creating games 
						as part of classwork and my own projects.</p>
					</Col>
					<Col>
						<img className="center skill-pic" src="https://cdn-icons-png.flaticon.com/512/1183/1183669.png"/>
					</Col>
				</Row>
				<Row>
					<Col>
						<img className="center skill-pic" src="https://cdn-icons-png.flaticon.com/512/919/919852.png"/>
					</Col>
					<Col>
						<h3 style={{fontSize: 50}} className="center-text skill-title">Python</h3>
						<p style={{ textAlign: "left"}}>I have one year of experience with Python. I have learned everything I've done in Java and Python
						and worked on simple projects such as Pong.</p>
					</Col>

				</Row>
				<Row>
					<Col>
						<h3 style={{fontSize: 50}} className="center-text skill-title">HTML, CSS, & JavaScript</h3>
						<p style={{ textAlign: "left"}}>I have one year of experience making personal projects in HTML, CSS, & JavaScript. I have
						an interest in fullstack web development and have worked on personal projects combining these
						three languages with libraries such as React and frameworks like Bootstrap.</p>
					</Col>
					<Col>
						<img className="center skill-pic" src="https://cdn-icons-png.flaticon.com/512/2085/2085263.png"/>
						
					</Col>

				</Row>
				<Row>
					<Col>
						<img className="center skill-pic" src="https://cdn-icons-png.flaticon.com/512/919/919825.png"/>
					</Col>
					<Col>
						<h3 style={{fontSize: 50}} className="center-text skill-title">Node.js</h3>
						<p style={{ textAlign: "left"}}>As part of my interest in full stack development, I have obtained
						a year of experience using Node.js and Express to create the back end for my projects.</p>
					</Col>

				</Row>
			</Container>
		</div>
	)
}

export default Skills;