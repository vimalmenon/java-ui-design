import * as React from "react";

import { 
    withRouter,
    Switch,
    Route, 
} from "react-router-dom";

import Introduction from "./topic/introduction";


const Index = (props) => {
	const {match, history} = props;
    const {url} = match;
    console.log(props)
    const onClick = (url) => {
    	history.push(url)
    }
	return (
		<Switch>
			<Route path={`${url}/introduction`} component={Introduction} />
			<Route exact path={`${url}`}>
				<div>
					<div onClick={() => onClick("presentation/introduction")}>0 - Introduction</div>
				</div>
			</Route>
		</Switch>
	);
};

export default withRouter(Index);