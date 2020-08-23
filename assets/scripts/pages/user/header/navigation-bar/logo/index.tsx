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
			background : "white",
			color: "red"
		},
	});
});

const Logo = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			this is logo
		</div>
	);
};

export default Logo;