import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {scrollSpy} from "react-scroll";

import ContactBar from "./contact-bar";
import NavigationBar from "./navigation-bar";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		header: {
			display: "flex",
			flexDirection: "column",
		},
	});
});

const Header = () => {
	const classes = useStyles();
	React.useEffect(() => {
		scrollSpy.addSpyHandler((x, y) => {
			console.log(y);
		}, document);
		console.log(scrollSpy);
	},[]);
	return (
		<header className={classes.header}>
			<ContactBar />
			<NavigationBar />
		</header>
	);
};

export default Header;