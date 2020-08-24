import * as React from "react";

import Home from "./home";
import Search from "./search";
import PrivacyPolicy from "./privacy-policy";

import { withRouter } from "react-router";

import {
	Switch,
	Route, 
} from "react-router-dom";

const Body = (props) => {
	const {match} = props;
	const {url} = match;
	return (
		<Switch>
			<Route path={`${url}/privacy-policy`} component={PrivacyPolicy} />
			<Route path={`${url}/search`} component={Search} />
			<Route path={`${url}`} component={Home} />
		</Switch>
	);
};

export default withRouter(Body);