import * as React from "react";

import IconButton from "@material-ui/core/IconButton";

import Brightness7Icon from "@material-ui/icons/Brightness7";
import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import Tooltip from "@material-ui/core/Tooltip";

import { connect } from "react-redux";
import {switchTheme} from "utility";

const DesktopMenu = (props: any) => {
	const {className, mode, onLogOut, setModel, groups, preferences} = props;
	const {palette} = preferences;
	const {type} = preferences.palette;
	return (
		<div className={className}>
			{mode=== "dark" ?
				<Tooltip title="Light mode" aria-label="Light mode">
					<IconButton aria-label="show 17 new notifications" color="inherit" onClick={() => switchTheme.switchTheme({...palette, type: (type==="light")? "dark": "light"})}>
						<Brightness7Icon />
					</IconButton>
				</Tooltip>
				:
				<Tooltip title="Dark mode" aria-label="Dark mode">
					<IconButton aria-label="show 4 new mails" color="inherit" onClick={() => switchTheme.switchTheme({...palette, type: (type==="light")? "dark": "light"})}>
						<BrightnessLowIcon />
					</IconButton>
				</Tooltip>
			}
			{groups.length > 1 ? 
				<IconButton
					aria-label="account of current user"
					color="inherit"
					onClick={() => setModel(true)}>
					<SwapHorizIcon />
				</IconButton>
				: 
				null
			}
			<IconButton
				aria-label="account of current user"
				color="inherit"
				onClick={onLogOut}>
				<ExitToAppIcon />
			</IconButton>
		</div>
	);
};


const mapStateToProps = (state: any) => {
	return {
		preferences: state.preferences,
	};
};

export default connect(
	mapStateToProps
)(DesktopMenu);