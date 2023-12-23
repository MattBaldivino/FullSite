import React from "react";
import Typewriter from 'typewriter-effect';


var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
console.log(viewportWidth);
function Header(){
	return(
		<div id="header">
			<Typewriter
				onInit={(typewriter) => {
					if(viewportWidth < 1024){
						typewriter.typeString("Greetings!")
						.pauseFor(2500)
						.deleteAll()
						.pauseFor(2500)
						.start()
					}else{
						typewriter.typeString("I'm Matt,")
						.pauseFor(2500)
						.deleteAll()
						typewriter.typeString("A developer")
						.pauseFor(2500)
						.deleteAll()
						typewriter.typeString("And student.")
						.pauseFor(2500)
						.deleteAll()
						.pauseFor(2500)
						.start();
					}
				}}
				options={{
					loop: true,
				}}
			/>
		</div>
		
	)
} 

export default Header;