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
					<Col xs={12} sm={12} md={6} className="skill-description">
						<h3 style={{fontSize: 50}} className="center-text skill-title">Java</h3>
						<p style={{ textAlign: "left"}}>I started learning Java in high school and have used it for 5 years now.
						Through high school and university coursework I have developed experience with Object Oriented Programming 
						and implementing Data Structures.</p>
					</Col>
					<Col xs={12} sm={12} md={6}>
						<img className="center skill-pic" src="https://cdn-icons-png.flaticon.com/512/1183/1183669.png"/>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={6}>
						<img className="center skill-pic" src="https://cdn-icons-png.flaticon.com/512/919/919852.png"/>
					</Col>
					<Col xs={12} sm={12} md={6} className="skill-description">
						<h3 style={{fontSize: 50}} className="center-text skill-title">Python</h3>
						<p style={{ textAlign: "left"}}>I have two years of experience with Python. I have learned everything I know in Java on Python
						and worked on simple projects such as Pong.</p>
					</Col>

				</Row>
				<Row>
					<Col xs={12} sm={12} md={6} className="skill-description">
						<h3 style={{fontSize: 50}} className="center-text skill-title">HTML, CSS, & JavaScript</h3>
						<p style={{ textAlign: "left"}}>I have one and a half years of experience making projects in HTML, CSS, & JavaScript. I have
						an interest in full stack web development and have worked on projects combining these
						three languages with libraries such as React and frameworks like Bootstrap.</p>
					</Col>
					<Col xs={12} sm={12} md={6}>
						<img className="center skill-pic" src="https://cdn-icons-png.flaticon.com/512/2085/2085263.png"/>
						
					</Col>

				</Row>
				<Row>
					<Col xs={12} sm={12} md={6}>
						<img className="center skill-pic" src="https://cdn-icons-png.flaticon.com/512/919/919825.png"/>
					</Col>
					<Col xs={12} sm={12} md={6} className="skill-description">
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