import * as React from "react";

import {
	createStyles,
	makeStyles,
} from "@material-ui/core/styles";

import {used} from "utility";


const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
		}
	});
});

const About = () => {
	const classes = useStyles();
	used(classes);
	return (
		<section>
			this is About
		</section>
	);
};


export default About;