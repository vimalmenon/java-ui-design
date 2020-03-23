import * as React from "react";

import { connect } from "react-redux";

import {ApiCaller} from "utility";
import {apiList} from "const";
import Unauthorised from "./unauthorised";

const {ComponentEntitlement} = apiList;

const unauthorized = (<Unauthorised />);

const Entitlement = (props) => {
	const {name, render, session, showUnauthorizied} = props;
	const [entitlement, setEntitlement] = React.useState({read: false, write: false, loaded: false})
	React.useEffect(() => {
		new ApiCaller(new ComponentEntitlement({name}))
			.success((value:any) => {
				setEntitlement({...value, loaded :true});
			});
	},[session.id]);
	return (
		<React.Fragment>
			{(entitlement && entitlement.read) ? render(entitlement): (showUnauthorizied && entitlement.loaded) ? unauthorized : null}
		</React.Fragment>
	)

};

const mapStateToProps = (state : any) => {
	return {
		session : state.user.session
	}
}


export default connect(
	mapStateToProps
)(Entitlement);