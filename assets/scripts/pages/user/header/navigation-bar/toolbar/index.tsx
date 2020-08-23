import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import { connect } from "react-redux";


import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
		}
	});
});

const Toolbar = ({preferences}) => {
	const classes = useStyles();
	const {type} = preferences.palette;
	return (
		<div className={classes.root}>
			<IconButton>
				<SearchIcon />
			</IconButton>
			{type === "light" ?
				<Tooltip title="Dark mode" aria-label="Dark mode">
					<IconButton>
						<BrightnessLowIcon/> 
					</IconButton>
				</Tooltip>:
				<Tooltip title="Light mode" aria-label="Light mode">
					<IconButton>
						<BrightnessHighIcon/> 
					</IconButton>
				</Tooltip>
			}
		</div>
	);
};

const mapStateToProps = (state : any) => {
	return {
		preferences: state.preferences,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Toolbar);