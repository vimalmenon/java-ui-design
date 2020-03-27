import * as React from "react";
import {
	Switch,
	Route, 
} from "react-router-dom";

import loadable from "@loadable/component";
import { useToasts } from "react-toast-notifications";
import { notification } from "utility";

import Home from "./home";


const Admin = loadable(() => import( /* webpackChunkName: "admin" */ /* webpackMode: "lazy" */ "./admin"));

const Pages = () => {
	const { addToast } = useToasts();
	notification.setNotification(addToast);
	return (
		<Switch>
			<Route path="/admin" component={Admin} />
			<Route path="/" component={Home} />
		</Switch>
	);
};

export default Pages;