import * as React from "react";
import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {version} from "const";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		footer: {
			display: (value: boolean) => value ? "flex": "none",
			flex: "0 0 3.5rem",
			background: theme.palette.background.default,
			padding: theme.spacing(2),
			flexDirection: "column"
		},
		section : {
			flex : 1,
			fontSize: "0.9em",
			marginTop: "2px"
		}
	});
});

const Footer = (props: any) => {
	const {drawer} = props;
	const classes = useStyles(drawer);
	return (
		<footer className={classes.footer}>
			<small className={classes.section}>&copy; 2020 vimalmenon.com</small>
			<small className={classes.section}><strong>Version :</strong> {version}</small>
		</footer>
	);
};


export default Footer;