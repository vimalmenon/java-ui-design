import * as React from "react";

import Hero from "./hero";
import About from "./about";
import Contact from "./contact";
import Tutorials from "./tutorials";


const Body = () => {
	return (
		<div>
			<Hero />
			<About />
			<Tutorials />
			<Contact />
		</div>
	);
};

export default Body;