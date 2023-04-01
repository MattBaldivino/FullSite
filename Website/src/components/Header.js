import React from "react";
import Typewriter from 'typewriter-effect';

function Header(){
	return(
		<div id="header">
			<Typewriter
				onInit={(typewriter) => {
				typewriter.typeString("I'm Matt,")
				.pauseFor(2500)
				.deleteAll()
				typewriter.typeString("A web developer")
				.pauseFor(2500)
				.deleteAll()
				typewriter.typeString("And student.")
				.pauseFor(2500)
				.deleteAll()
				.pauseFor(2500)
				.start();
				}}
				options={{
					loop: true
				}}
			/>
		</div>
		
	)
} 

export default Header;