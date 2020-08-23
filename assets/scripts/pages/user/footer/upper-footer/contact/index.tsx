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
			flex:"1 1 50%"
		},
	});
});
const Contact = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			Contact
		</div>
	);
};

export default Contact;