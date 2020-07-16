import * as React from "react";

import {
	createStyles,
	makeStyles,
} from "@material-ui/core/styles";

import {
	Link
} from "react-router-dom";


import {version} from "const";

const useStyles = makeStyles((theme) => {
	return createStyles({
		footer: {
			display:"flex",
			backgroundColor: theme.palette.background.paper,
			padding: theme.spacing(3, 0),
			//background:"#1A1A1A",
			justifyContent:"center"
		},
		section : {
			display:"flex",
			flex: 1,
			fontSize: "1rem",
			maxWidth: "1200px",
			flexBasis: "auto",
			flexGrow: 1
		}
	});
});

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<section className={classes.section}>
				<div>
					&copy;&nbsp;
					<Link to="https://vimalmenon.com/">
						VimalMenon
					</Link>,&nbsp;
					{new Date().getFullYear()}.
				</div>
				<div>
					Version : {version}
				</div>
			</section>
		</footer>
	);
};

export default Footer;