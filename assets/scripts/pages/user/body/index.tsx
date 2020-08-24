import * as React from "react";

import Home from "./home";
import Search from "./search";
import PrivacyPolicy from "./privacy-policy";

import {
	Switch,
	Route, 
} from "react-router-dom";

const Body = () => {
	return (
		<Switch>
			<Route path="/privacy-policy" component={PrivacyPolicy} />
			<Route path="/search" component={Search} />
			<Route path="/" component={Home} />
		</Switch>
	);
};

export default Body;