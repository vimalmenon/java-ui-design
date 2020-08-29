import * as React from "react";
import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import Explore from "./explore";
import Contact from "./contact";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			background: theme.palette.type==="light"?"#00162A":"#191919",
			justifyContent : "center",
			color: "white"
		},
		container : {
			display:"flex",
			flexDirection:"row",
			flex: `1 1 100%`,
			margin: theme.spacing(2,1),
			[theme.breakpoints.up("lg")]: {
				flex: `0 0 ${theme.breakpoints.values.lg}px`,
			},
			[theme.breakpoints.down("sm")]: {
				flexDirection:"column",
			},
		},
	});
});

const UpperFooter = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<Contact />
				<Explore />
			</div>
		</div>
	);
};

export default UpperFooter;