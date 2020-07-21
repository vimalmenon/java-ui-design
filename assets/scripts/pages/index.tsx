import * as React from "react";
import {
	Switch,
	Route, 
} from "react-router-dom";

import loadable from "@loadable/component";
import { useToasts } from "react-toast-notifications";
import { notification } from "utility";
import { connect } from "react-redux";

import {
	ThemeProvider,
	createMuiTheme
} from "@material-ui/core/styles";

import Home from "./home";


const Admin = loadable(() => import( /* webpackChunkName: "admin" */ /* webpackMode: "lazy" */ "./admin"));

const Pages = (props) => {
	const { addToast } = useToasts();
	let {palette} = props.preferences;
	notification.setNotification(addToast);
	const theme = createMuiTheme({
		palette : {
			...palette
		}
	});
	return (
		<ThemeProvider theme={theme}>
			<Switch>
				<Route path="/admin" component={Admin} />
				<Route path="/" component={Home} />
			</Switch>
		</ThemeProvider>
	);
};

const mapStateToProps = (state : any) => {
	return {
		preferences: state.preferences,
	};
};

export default connect(
	mapStateToProps
)(Pages);