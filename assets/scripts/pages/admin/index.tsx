import * as React from "react";

import Dashboard from "./dashboard";
import Login from "./login";

import {Entitlement} from "dumb-components";

import Header from "../home/header";
import Footer from "../home/footer";



class Pages extends React.Component {
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
}

export default Pages;