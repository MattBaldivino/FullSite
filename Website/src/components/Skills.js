import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills(){
	return(
		<div className="h-auto d-inline-block" id="skills-div">
			<Container>
				<h1 className="center-text">Skills</h1>
				<Row>
					<Col xs={12} sm={12} md={6} className="skill-description">
						<h3 className="center-text skill-title">Java</h3>
						<p style={{ textAlign: "left"}}>I started learning Java in high school and have used it for 7 years now.
						Through high school and university coursework I have developed experience with Object Oriented Programming, 
						Algorithms, and Data Structures.</p>
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
						<h3 className="center-text skill-title">Python</h3>
						<p style={{ textAlign: "left"}}>I have 3 years of experience with Python. Using Python, I have developed my machine learning,
						 data science, and web development skills.</p>
					</Col>

				</Row>
				<Row>
					<Col xs={12} sm={12} md={6} className="skill-description">
						<h3 className="center-text skill-title">MERN</h3>
						<p style={{ textAlign: "left"}}>I have 3 years of experience working with the MERN stack. Using these technologies, I have developed
						a social media app as well as using individual elements of the MERN stack across various projects such as this portfolio, a Sentiment
						Analysis Website, and a website for my school's AI Lab.</p>
					</Col>
					<Col xs={12} sm={12} md={6}>
						<img className="center skill-pic" src="https://www.testingshastra.com/wp-content/uploads/2024/06/MERN-Stack-Development-removebg-preview.png"/>						
					</Col>

				</Row>
				<Row>
					<Col xs={12} sm={12} md={6}>
						<img className="center skill-pic" src="https://cdn-icons-png.flaticon.com/512/10910/10910575.png"/>
					</Col>
					<Col xs={12} sm={12} md={6} className="skill-description">
						<h3 style={{fontSize: 50}} className="center-text skill-title">Version Control</h3>
						<p style={{ textAlign: "left"}}>I have 3 years of version control experience in personal, classroom, and professional settings.
						I am familiar with both a centralized workflow and a feature branch workflow.</p>
					</Col>

				</Row>
			</Container>
		</div>
	)
}

export default Skills;