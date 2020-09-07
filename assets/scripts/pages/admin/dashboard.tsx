import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
	createStyles,
	makeStyles,
} from "@material-ui/core/styles";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";

import Main from "./content/main";
import Header from "./common/header";
import Sidebar from "./common/sidebar";

import * as actions from "actions";

import {apiList} from "const";

import {ApiCaller} from "utility";

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
	const {commonActions, session} = props;
	React.useEffect(() => {
		if (session.user) {
			new ApiCaller(new Admin())
				.success((data: any)=> {
					commonActions.setNavigationEntitlement(data.navigations);
					commonActions.setGroups(data.groups);
				});
		}
	},[session.id]);
	React.useEffect(() => {
		/*let {pathname} = props.history.location;
		pathname = replaceUrlBackslashAtEnd(pathname);
		if (urlMapper[pathname] && !urlMapper[pathname].checkEntitlement) {
			document.title = urlMapper[pathname].title;
			if (pathname) {
				commonActions.setSelectedNavigation(urlMapper[pathname]);
			}
		}*/
	});
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<Header />
			<Sidebar />
			<Main />
		</div>
	);
}

const mapStateToProps = (state : any) => {
	return {
		session: state.user.session
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		commonActions : bindActionCreators({...actions.common}, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(Dashboard));