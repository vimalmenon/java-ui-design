import * as React from "react";

import {
	createStyles,
	makeStyles,
} from "@material-ui/core/styles";

import {
	Link
} from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

import {MainNavigation} from "const";

import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";

const useStyles = makeStyles((theme) => {
	return createStyles({
		root: {
			display: "flex",
			borderBottom: `1px solid ${theme.palette.divider}`,
			background: "#0c2340",
			justifyContent:"center"
		},
		toolbarLink: {
			padding: theme.spacing(1),
			flexShrink: 0,
			color:"white",
			textDecoration: "none"
		},
		toolbarTitle: {
			flex: 1,
			fontSize: "1rem",
			maxWidth: "1200px",
			flexBasis: "auto",
			flexGrow: 1
		},
		input: {
			marginLeft: theme.spacing(1),
			flex: 1,
		},
		iconButton: {
			padding: 10,
		},
		search : {
			display: "flex",
			color:"white"
		}
	});
});


const Header = () => {
	const classes = useStyles();
	return (
		<Toolbar className={classes.root}>
			<Typography
				color="inherit"
				noWrap
				className={classes.toolbarTitle}>
				<Link
					to={"/"}
					className={classes.toolbarLink}>
					Vimal Menon
				</Link>
				{MainNavigation.map((navigation, key) => {
					return(
						<Link
							key={key}
							to={navigation.link}
							className={classes.toolbarLink}>
							{navigation.name}
						</Link>
					);
				})}
			</Typography>
			<BrightnessLowIcon className={classes.search}/>
			<BrightnessHighIcon className={classes.search}/>
		</Toolbar>
	);
};

export default Header;