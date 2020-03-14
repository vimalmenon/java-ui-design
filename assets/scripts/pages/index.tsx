import * as React from "react";
import { 
    withRouter,
    Switch,
    Route, 
} from "react-router-dom";

import loadable from '@loadable/component'
import {LazyLoading} from "dumb-components";
import Home from "./home";


const Admin = loadable(() => import( /* webpackChunkName: "admin" */ /* webpackMode: "lazy" */ "./admin"))


const Pages = () => {
	return (
		<Switch>
			<Route path="/presentation">
				<LazyLoading 
					path={() => import(/* webpackChunkName: "presentation" */ "./presentation")}/>
			</Route>
			<Route path="/admin">
				<Admin />
			</Route>
			<Route path="/" component={Home} />
		</Switch>
	);
};

export default Pages;