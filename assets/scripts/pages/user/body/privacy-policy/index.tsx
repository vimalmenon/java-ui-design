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
			flexDirection:"column"
		},
	});
});
const PrivacyPolicy = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
		</div>
	);
};

export default PrivacyPolicy;