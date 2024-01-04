import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import screenshot from "./site.png";
import rover from "./rover.png";
import mathnasium from "./mathnasium.jpg";

function Slide() {
  return (
	<div id="carousel-div">
		<Carousel className="main-slide" infiniteLoop={true} showThumbs={false} showStatus={false}
		showArrows={false} autoPlay={true} stopOnHover={false} interval={5000} showIndicators={false}>
			<div className="carousel-img">
		    	<a target="_blank" href="https://www.broncospace.com/bill-ee-ai-rover"><img src={rover} /></a>
				<p id="caption1" className="legend">BILLEE: Worked on autonomous movement and camera vision using ROS, XML, and Python.</p>
			</div>
			<div className="carousel-img">
		    	<a target="_blank" href="https://mb-sentiment-analysis.onrender.com/"><img src={screenshot} alt="website-screenshot"/></a>
				<p id="caption1" className="legend">Developed a full stack site using React, Flask, MySQL, and AWS Lambda to perform sentiment analysis.</p>
			</div>
			<div className="carousel-img">
		    	<a target="_blank" href="https://github.com/MattBaldivino/marketing_project"><img src={mathnasium} /></a>
				<p id="caption1" className="legend">Mathnasium: Created a program to filter through inactive accounts for a marketing campaign using Python and Pandas.</p>
			</div>
   		</Carousel>
	</div>
  );
}

export default Slide;