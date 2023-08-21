import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Slide() {
  return (
	<div className="carousel-div">
		<Carousel className="main-slide" infiniteLoop={true} showThumbs={false}>
			<div>
		    		<a href="https://www.broncospace.com/bill-ee-ai-rover"><img src="https://static.wixstatic.com/media/366a2e_32f7b7c098e84153ae1719a77eb53df1~mv2.png/v1/fill/w_672,h_453,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png" /></a>
				<p id="caption1" className="legend">BILLEE: Worked on autonomous movement and camera vision using ROS, XML, and Python.</p>
			</div>
			<div>
		    		<a href="https://github.com/MattBaldivino/marketing_project"><img src="https://www.wafj.com/sites/wafj/images/partners/mathnasium_400x300.jpg" /></a>
				<p id="caption1" className="legend">Mathnasium: Created a program to filter through inactive accounts for a marketing campaign using Python and Pandas.</p>
			</div>
			<div>
		    		<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEVTc05c9uuRAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" />
				<p id="caption1" className="legend">Coming Soon(I am a busy student)</p>
			</div>
   		</Carousel>
	</div>
  );
}

export default Slide;