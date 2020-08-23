import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex: "0 0 3.125rem",
			background: "green"
		},
	});
});

import Logo from "./logo";

const NavigationBar = ()=> {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Logo />
			This is navigation bar
		</div>
	);
};

export default NavigationBar;