import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

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
	return (
		<header className={classes.header}>
			<ContactBar />
			<NavigationBar />
			This is heading
		</header>
	);
};

export default Header;