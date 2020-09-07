import * as React from "react";

import Home from "./home";
import Search from "./search";
import PrivacyPolicy from "./privacy-policy";
import PageNotFound from "./page-not-found";

import {
	Switch,
	Route, 
} from "react-router-dom";

const Body = (props) => {
	return (
		<Switch>
			<Route path={`/privacy-policy`} component={PrivacyPolicy} />
			<Route path={`/search`} component={Search} />
			<Route exact path={`/`} component={Home} />
			<Route component={PageNotFound} />
		</Switch>
	);
};

export default Body;