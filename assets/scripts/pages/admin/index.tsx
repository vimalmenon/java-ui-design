import * as React from "react";

import Dashboard from "./dashboard";
import Login from "./login"

import {Entitlement} from "dumb-components";



class Pages extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<React.Fragment>
				<Entitlement 
					name="Dashboard" 
					render={({write, read}) => {
						return (
							<Dashboard read={read}/>
						)}} />
				<Entitlement
					name="Login"
					render={({write}) => {
						return (
							<Login />
						)}} />
			</React.Fragment>
		)
	}
}

export default Pages;