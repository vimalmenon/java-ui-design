import * as React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "actions";

import {navigationByName} from "const";

const {pageNotFound} = navigationByName;

const PageNotFoundPage = (props) => {
	React.useEffect(() => {
		const {commonActions} = props;
		document.title = pageNotFound.title;
		commonActions.setSelectedNavigation(pageNotFound);
	});
	return (
		<div>
			Page not found
		</div>
	)
}

const mapStateToProps = () => {
	return {
	}
}
function mapDispatchToProps(dispatch: any) {
	return {
		commonActions : bindActionCreators({...actions.common}, dispatch)    
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PageNotFoundPage);