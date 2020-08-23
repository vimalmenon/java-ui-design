import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import dark from  "../../../../images/logo/dark.png";
import light from "../../../../images/logo/light.jpg";


const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			background : "white",
			height: "50px",
			width: "182px"
		},
		logo : {
			width: "100%"
		}
	});
});

const Logo = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<img 
				src={light} 
				alt={"Vimal Menon"} 
				className={classes.logo}/>
		</div>
	);
};

export default Logo;