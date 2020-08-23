import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import Icons from "./icons";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "row",
			background : "#00172B",
			justifyContent : "center",	
			color:"white",
			flex: "0 0 3.9375rem"
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

const ContactBar = ()=> {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<Icons />
			</div>
		</div>
	);
};

export default ContactBar;