import * as React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import Heading from "./header";
import Body from "./body";
import Footer from "./footer";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			backgroundColor: theme.palette.background.paper,
			color: theme.palette.text.primary,
		},
	});
});

const Home = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<Heading />
			<Body />
			<Footer />
		</div>
	);
};

export default Home;