import * as React from "react";

import {Entitlement} from "dumb-components";

import Dashboard from "./dashboard";
import Login from "./login";

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
								<Login />
							</React.Fragment>
						);}} />
			</React.Fragment>
		);
	}
}

export default Pages;