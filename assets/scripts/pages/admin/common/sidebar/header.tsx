import * as React from "react";

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Header = (props) => {
	const {theme, actions, drawer, classes} = props;
	return (
		<div className={classes.toolbar}>
			<Typography variant="h6" noWrap>
				VimalMenon
			</Typography>
			<IconButton onClick={() => actions.toggleDrawer(drawer)}>
				{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
			</IconButton>
		</div>
	);
};

export default Header;