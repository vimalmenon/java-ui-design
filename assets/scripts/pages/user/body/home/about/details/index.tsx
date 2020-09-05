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

const Details = () => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			This is detailpage
		</section>
	);
};

export default Details;