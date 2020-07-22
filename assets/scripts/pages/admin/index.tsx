import * as React from "react";


import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "actions";
import {storage} from "const";

import {Entitlement} from "dumb-components";

import Dashboard from "./dashboard";
import Login from "./login";
import Header from "../home/header";
import Footer from "../home/footer";



class Pages extends React.Component<any,any> {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<React.Fragment>
				<Entitlement 
					name="Dashboard" 
					render={({read}) => {
						return (
							<Dashboard read={read}/>
						);}} />
				<Entitlement
					name="Login"
					render={() => {
						return (
							<React.Fragment>
								<Header />
								<Login />
								<Footer />
							</React.Fragment>
						);}} />
			</React.Fragment>
		);
	}
	componentDidMount () {
		let localStorage = storage.selectStorage("local").getStorage();
		if (localStorage["preferences"]) {
			this.props.preferencesActions.setPreferences({...localStorage["preferences"]});
		}
	}
}
const mapStateToProps = (state : any) => {
	return {
		preferences: state.preferences,
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		preferencesActions : bindActionCreators({...actions.preferences}, dispatch)
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Pages);