import * as React from "react";

import {navigationByName} from "const";
import {dispatch} from "utility";
import * as Actions from "actions";

const {unauthorised} = navigationByName;


const Unauthorised = (props: any) => {
	React.useEffect(() => {
		document.title = unauthorised.title;
		dispatch(Actions.common.setSelectedNavigation(unauthorised));
	});
	return (
		<div>
			this is unauthorized
		</div>
	);
};

export default Unauthorised;