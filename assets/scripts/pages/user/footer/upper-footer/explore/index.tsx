import * as React from "react";
import clsx from "clsx";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex:"1 1 50%"
		},
		explore: {
			fontFamily: "Philosopher",
			fontStyle: "normal",
			fontWeight: "bold",
			fontSize: "36px",
			color: "#FFFFFF"
		},
		divider: {
			display:"flex"
		},
		line: {
			height: "2px",
			width: "100%",
			backgroundColor: "#FFFFFF",
			flex:"1 1 60%"
		},
		stroke: {
			backgroundColor:"#FA2B54",
			flex: "1 1 40%"
		}
	});
});
const Explore = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div>
				<div className={classes.explore}>
					Explore
				</div>
				<div className={classes.divider}>
					<span className={clsx(classes.line, classes.stroke)}></span>
					<span className={classes.line}></span>
				</div>
				<div>
				</div>
			</div>
			
		</div>
	);
};

export default Explore;