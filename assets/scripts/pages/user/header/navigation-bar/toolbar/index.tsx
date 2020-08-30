import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import { connect } from "react-redux";
import {switchTheme} from "utility";


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

const Toolbar = ({preferences, search, setSearch, showSearch}) => {
	const classes = useStyles();
	let {palette} = preferences;
	const {type} = preferences.palette;
	return (
		<div className={classes.root}>
			{showSearch ?
				<Tooltip title="Search" aria-label="Search" onClick={()=>setSearch(!search)}>
					<IconButton>
						<SearchIcon />
					</IconButton>
				</Tooltip>:
				null
			}
			{type === "light" ?
				<Tooltip title="Dark mode" aria-label="Dark mode" onClick={() => switchTheme.switchTheme({...palette, type: (type==="light")? "dark": "light"})}>
					<IconButton>
						<BrightnessLowIcon/> 
					</IconButton>
				</Tooltip>:
				<Tooltip title="Light mode" aria-label="Light mode" onClick={() => switchTheme.switchTheme({...palette, type: (type==="light")? "dark": "light"})}>
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

export default connect(
	mapStateToProps
)(Toolbar);