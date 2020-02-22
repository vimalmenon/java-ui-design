import * as React from "react";

import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

const DesktopMenu = (props: any) => {
	const {className, mode, preferencesActions, onLogOut, setModel, groups} = props;
	return (
		<div className={className}>
            {mode=== "dark" ? 
              <IconButton aria-label="show 17 new notifications" color="inherit" onClick={() => preferencesActions.toggleMode(mode)}>
                  <Brightness7Icon />
              </IconButton>
              :
              <IconButton aria-label="show 4 new mails" color="inherit" onClick={() => preferencesActions.toggleMode(mode)}>
              <Brightness4Icon />
          </IconButton>
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