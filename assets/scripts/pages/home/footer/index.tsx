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
		footer:{
			display:"flex",
			backgroundColor: theme.palette.background.paper,
			padding: theme.spacing(3, 2),
			justifyContent:"center"
		},
		section:{
			display:"flex",
			flex:1,
			maxWidth:"1200px",
			flexBasis:"auto",
			flexGrow:1,
			justifyContent:"space-between",
			fontSize:"0.9rem",
		},
		navigation:{
			"& span" : {
				padding:theme.spacing(0, 1),
				"&:not(:last-child)" : {
					borderRight:"1px solid gray"
				}
			}
		},
		link:{
			textDecoration:"none",
			color: "rgba(0, 0, 0, 0.87)"
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
					<a 
						className={classes.link}
						target="_blank"
						rel="noopener noreferrer"
						href="https://vimalmenon.com/">
						VimalMenon
					</a>,&nbsp;
					{new Date().getFullYear()}.
				</div>
				<div className={classes.navigation}>
					<span>
						<Link className={classes.link} to="/privacy-policy">
							privacy policy
						</Link>
					</span>
					<span>
						Version: {version}
					</span>
				</div>
			</section>
		</footer>
	);
};

export default Footer;