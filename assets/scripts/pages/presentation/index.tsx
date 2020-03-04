import * as React from "react";

import { 
    withRouter,
    Switch,
    Route, 
} from "react-router-dom";

import Introduction from "./topic/introduction";


const Index = (props) => {
	const {match} = props;
    const {url} = match;
	return (
		<Switch>
			<Route path={`${url}/introduction`} component={Introduction} />
			<Route exact path={`${url}`}>
				<div>
					this is presenation page
				</div>
			</Route>
		</Switch>
	);
};

export default Index;