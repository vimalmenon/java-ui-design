import * as React from "react";

import { connect } from "react-redux";

import { withRouter } from "react-router";
import { bindActionCreators } from "redux";

//import {urlMapper} from "const";
import * as actions from "actions";

//import {replaceUrlBackslashAtEnd} from "utility";

import {
	Switch,
	Route
} from "react-router-dom";

import {Entitlement} from "dumb-components";

import AdminHome from "./admin";
import YoutubeScript from "./youtube-script";
import Message from "./message";


const Admin = (props) => {
	const {match} = props;
	const {url} = match;
	React.useEffect(() => {
		/*let {navigationEntitlement, history, commonActions} = props;
		let {pathname} = history.location;
		if (pathname.startsWith("/admin/admin") && navigationEntitlement["Admin"]) {
			document.title = urlMapper[replaceUrlBackslashAtEnd(pathname)].title;
			if (pathname) {
				commonActions.setSelectedNavigation(urlMapper[replaceUrlBackslashAtEnd(pathname)]);
			}
		}*/
	});
	return (
		<Entitlement 
			name="Admin"
			showUnauthorizied={true} 
			render={() => {
				return (
					<Switch>
						<Route path={`${url}/message`} component={Message} />
						<Route path={`${url}/youtube-script`} component={YoutubeScript} />
						<Route path={`${url}`} component={AdminHome} />
					</Switch>
				);
			}}/>
	);
};

const mapStateToProps = (state : any) => {
	return {
		navigationEntitlement: state.common.navigationEntitlement
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
)(withRouter(Admin));