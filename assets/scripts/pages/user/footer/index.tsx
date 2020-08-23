import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		footer: {
			display: "flex",
			flexDirection: "column",
		}
	});
});

import LowerFooter from "./lower-footer";
import UpperFooter from "./upper-footer";

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<UpperFooter />
			<LowerFooter />
		</footer>
	);
};

export default Footer;