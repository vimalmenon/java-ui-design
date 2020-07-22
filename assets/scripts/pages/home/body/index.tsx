import * as React from "react";

import {
	Theme,
	createStyles,
	makeStyles,
} from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

import {
	Switch,
	Route, 
	withRouter
} from "react-router-dom";
import {replaceUrlBackslashAtEnd} from "utility";
import {MainUrlMapper} from "const";


import About from "./about";
import Contact from "./contact";
import Tutorials from "./tutorials";
import PrivacyPolicy from "./privacy-policy";
import Home from "./home";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			backgroundColor: theme.palette.background.default,
			color: theme.palette.text.primary,
			padding: theme.spacing(2,0),
		}
	});
});


const Body =(props) => {
	const classes = useStyles();
	let {location} = props;
	React.useEffect(() => {
		let {pathname} = location;
		if (MainUrlMapper[replaceUrlBackslashAtEnd(pathname)]) {
			document.title = MainUrlMapper[replaceUrlBackslashAtEnd(pathname)].title;
		}
	});
	return (
		<section className={classes.root}>
			<Container maxWidth="lg">
				<Switch>
					<Route exact path={`/`} component={Home} />
					<Route path={`/about`} component={About} />
					<Route path={`/contact`} component={Contact} />
					<Route path={`/tutorials`} component={Tutorials} />
					<Route path={`/privacy-policy`} component={PrivacyPolicy} />
				</Switch>
			</Container>
		</section>
	);
};

export default withRouter(Body);