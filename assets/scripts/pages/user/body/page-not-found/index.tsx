import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection:"column"
		},
	});
});
const PageNotFound = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			page not found
		</div>
	);
};

export default PageNotFound;