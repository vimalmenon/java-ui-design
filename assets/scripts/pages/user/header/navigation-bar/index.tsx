import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import Logo from "./logo";
import Toolbar from "./toolbar";
import Navigation from "./navigation";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex: "0 0 3.125rem",
			justifyContent : "center",
		},
		container : {
			dislay:"flex",
			flexDirection:"row",
			flex: `1 1 100%`,
			alignItems : "center",
			[theme.breakpoints.up("lg")]: {
				display:"flex",
				flex: `0 0 ${theme.breakpoints.values.lg}px`,
			},
		}
	});
});



const NavigationBar = ()=> {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<Logo />
				<Navigation />
				<Toolbar />
			</div>
		</div>
	);
};

export default NavigationBar;