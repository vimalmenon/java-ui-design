import * as React from "react";

import Snackbar from "@material-ui/core/Snackbar";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "actions";

const SnackBarComponent = ({common, commonActions}) => {
	let {snackBar, snackMessage} = common;
	const onClose = () => {
		console.log(commonActions);
	};
	return (
		<Snackbar
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "left",
			}}
			open={snackBar}
			autoHideDuration={3000}
			onClose={onClose}
			message={snackMessage} />
	);
};

const mapStateToProps = (state:any) => {
	return {
		common: state.common
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		commonActions: bindActionCreators({...actions.common}, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SnackBarComponent);