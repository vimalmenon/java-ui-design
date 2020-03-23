import * as React from "react";

import {Menu} from "dumb-components";

import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";


import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";


const MobileMenu = (props: any) => {
	const {className, mode, onLogOut, groups, setModel, preferencesActions} = props;
	const [element, setElement] = React.useState<any>(null);
	const [open, setOpen] = React.useState(false);
	return (
		<div className={className}>
			<IconButton
				ref={(reference: any) => setElement(reference)}
				onClick={(event: any) => setOpen(!open)}
				color="inherit">
				<MoreIcon />
			</IconButton>
			<Menu
				open={open}
				onClose={() => setOpen(!open)}
				element={element}>
				<Menu.Item onClick={() => preferencesActions.toggleMode(mode)}>
					{mode=== "dark" ? 
						<IconButton aria-label="show 17 new notifications" color="inherit">
							<Brightness7Icon />
						</IconButton>
						:
						<IconButton aria-label="show 4 new mails" color="inherit">
							<Brightness4Icon />
						</IconButton>
					}
					<p>Mode</p>
				</Menu.Item>
				{groups.length > 1 ?
					<Menu.Item onClick={() => setModel(true)}> 
						<IconButton
							aria-label="Switch group"
							color="inherit">
							<SwapHorizIcon />
						</IconButton>
						<p>Switch Group</p>
					</Menu.Item>
					: 
					<span />
				}
				<Menu.Item onClick={onLogOut}>
					<IconButton>
						<ExitToAppIcon />
					</IconButton>
					<p>Log Out</p>
				</Menu.Item>
			</Menu>
		</div>
		
	);
};

export default MobileMenu;