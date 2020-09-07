import * as React from "react";
import {
	Switch,
	Route, 
} from "react-router-dom";

import loadable from "@loadable/component";
import { useToasts } from "react-toast-notifications";
import { notification} from "utility";
import { connect } from "react-redux";

import {
	ThemeProvider,
	createMuiTheme
} from "@material-ui/core/styles";

import { bindActionCreators } from "redux";

import * as actions from "actions";

const Admin = loadable(() => import( /* webpackChunkName: "admin" */ /* webpackMode: "lazy" */ "./admin"));

import Loading from "./loading";
import User from "./user";
import {init} from "./index.service";


const Pages = ({preferences, common, commonActions}) => {
	const { addToast } = useToasts();
	const {palette} = preferences;
	const {promises} = common;
	notification.setNotification(addToast);
	const theme = createMuiTheme({
		palette : {
			...palette
		}
	});
	const [loading, setLoading] = React.useState(true);
	React.useEffect(() => {
		init(commonActions);
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

const mapStateToProps = (state:any) => {
	return {
		preferences: state.preferences,
		common: state.common
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		commonActions: bindActionCreators({...actions.common}, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Pages);