import * as React from "react";

import {
	createStyles,
	makeStyles,
} from "@material-ui/core/styles";


const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
		}
	});
});


const Tutorials = () => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			This is Tutorial
		</section>
	);
};


export default Tutorials;