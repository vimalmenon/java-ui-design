import * as React from "react";

import IconButton from "@material-ui/core/IconButton";

import Brightness7Icon from "@material-ui/icons/Brightness7";
import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import Tooltip from "@material-ui/core/Tooltip";


const DesktopMenu = (props: any) => {
	const {className, mode, preferencesActions, onLogOut, setModel, groups} = props;
	return (
		<div className={className}>
			{mode=== "dark" ?
				<Tooltip title="Light mode" aria-label="Light mode">
					<IconButton aria-label="show 17 new notifications" color="inherit" onClick={() => preferencesActions.toggleMode(mode)}>
						<Brightness7Icon />
					</IconButton>
				</Tooltip>
				:
				<Tooltip title="Dark mode" aria-label="Dark mode">
					<IconButton aria-label="show 4 new mails" color="inherit" onClick={() => preferencesActions.toggleMode(mode)}>
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

export default DesktopMenu;