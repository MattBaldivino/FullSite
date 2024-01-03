import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function navDisplay(){
	return(
		<div id="nav-div">
			<Link style={{fontFamily: 'IBM Plex Mono'}} className="nav-text " to="#header" smooth>
				About
			</Link>
			<Link style={{fontFamily: 'IBM Plex Mono'}} className="nav-text" to="#skills-div" smooth>
				Skills
			</Link>
			<Link style={{fontFamily: 'IBM Plex Mono'}} className="nav-text" to="#project-div" smooth>
				Projects
			</Link>
			<Link style={{fontFamily: 'IBM Plex Mono'}} className="nav-text" to="#contact" smooth>
				Contact
			</Link>
		</div>
	)
}

function App() {
	return(
		<BrowserRouter>
			<div className="App">
				
				<div id="nav">
					<div id="name">
						<h3>Matthew Baldivino</h3>
					</div>
					{navDisplay()}
				</div>
				
				<Header />
				<Body />
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App;