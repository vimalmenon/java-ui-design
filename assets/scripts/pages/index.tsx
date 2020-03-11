import * as React from "react";
import { 
    withRouter,
    Switch,
    Route, 
} from "react-router-dom";

import Presentation from "./presentation";
import Admin from "./admin";
import Home from "./home";


const Pages = () => {
	return (
		<Switch>
			<Route path="/presentation" component={Presentation} />
			<Route path="/admin" component={Admin} />
			<Route path="/" component={Home} />
		</Switch>
	);
};

export default Pages;