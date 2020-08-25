import * as React from "react";
import {
	Switch,
	Route, 
} from "react-router-dom";

import loadable from "@loadable/component";
import { useToasts } from "react-toast-notifications";
import { notification, switchTheme } from "utility";
import { connect } from "react-redux";

import Loading from "./loading";

import {
	ThemeProvider,
	createMuiTheme
} from "@material-ui/core/styles";

import User from "./user";

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
	const loading = false;
	React.useEffect(() => {
		switchTheme.themeInit();
	},[]);
	return (
		<ThemeProvider theme={theme}>
			{!loading ? <Switch>
				<Route path="/admin" component={Admin} />
				<Route path="/" component={User} />
			</Switch>: <Loading />}
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