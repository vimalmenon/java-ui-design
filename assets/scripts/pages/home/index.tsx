import * as React from "react";

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import {
	createStyles,
	makeStyles,
} from "@material-ui/core/styles";


import Header from "./header";
import Body from "./body";
import Footer from "./footer";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column"
		}
	});
});

const Home = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<Container maxWidth="lg">
				<Header />
				<Body />
				<Footer />
			</Container>
		</div>
	);
};

export default Home;