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

const Pages = ({preferences}) => {
	const { addToast } = useToasts();
	let {palette, promises} = preferences;
	notification.setNotification(addToast);
	const theme = createMuiTheme({
		palette : {
			...palette
		}
	});
	const [loading, setLoading] = React.useState(true);
	React.useEffect(() => {
		switchTheme.themeInit();
		Promise.all(promises).then(() => {
			setLoading(false);
		});
	},[]);
	return (
		<ThemeProvider theme={theme}>
			{!loading ? <Switch>
				<Route path="/admin" component={Admin} />
				<Route path="/" component={User} />
			</Switch>: <Loading/>}
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