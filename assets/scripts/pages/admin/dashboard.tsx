import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
	createStyles,
	makeStyles,
	ThemeProvider,
	createMuiTheme,
} from "@material-ui/core/styles";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";

import Main from "./content/main";
import Header from "./common/header";
import Sidebar from "./common/sidebar";

import * as actions from "actions";

import {urlMapper, apiList} from "const";

import {replaceUrlBackslashAtEnd, ApiCaller} from "utility";

const {Admin} = apiList;

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			minHeight: "100%"
		},
	});
});
function Dashboard (props) {
	const {preferences, commonActions, preferencesActions, session} = props;
	let {palette} = preferences;
	const theme = createMuiTheme({
		palette : {
			type: palette.type,
			primary:palette.primary,
			secondary: palette.secondary      
		},
	});
	React.useEffect(() => {
		if (session.user) {
			new ApiCaller(new Admin())
				.success((data: any)=> {
					if (data.preferences) {
						preferencesActions.setPreferences(JSON.parse(data.preferences));
					}
					commonActions.setNavigationEntitlement(data.navigations);
					commonActions.setGroups(data.groups);
				});
		}
	},[session.id]);
	React.useEffect(() => {
		let {pathname} = props.history.location;
		pathname = replaceUrlBackslashAtEnd(pathname);
		if (urlMapper[pathname] && !urlMapper[pathname].checkEntitlement) {
			document.title = urlMapper[pathname].title;
			if (pathname) {
				commonActions.setSelectedNavigation(urlMapper[pathname]);
			}
		}
	});
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Header />
				<Sidebar />
				<Main />
			</ThemeProvider>
		</div>
	);
}

const mapStateToProps = (state : any) => {
	return {
		preferences: state.preferences,
		session: state.user.session
	};
};
function mapDispatchToProps(dispatch: any) {
	return {
		commonActions : bindActionCreators({...actions.common}, dispatch),
		preferencesActions : bindActionCreators({...actions.preferences}, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(Dashboard));