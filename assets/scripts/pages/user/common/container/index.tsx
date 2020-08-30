import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import clsx from "clsx";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			justifyContent : "center",
			backgroundColor:(value)=> value?(theme.palette.type==="light")?"#F2F6F9":"#19191A":"",
			margin:theme.spacing(1,0),
		},
		container : {
			display:"flex",
			flex: "1 1 100%",
			margin:theme.spacing(1,1),
			padding:theme.spacing(3,0),
			[theme.breakpoints.up("lg")]: {
				display:"flex",
				flex: `0 0 ${theme.breakpoints.values.lg}px`,
			},
		}
	});
});

const Container = ({dark, children, className}) => {
	const classes = useStyles(dark);
	return(
		<div className={clsx(classes.root, className)}>
			<div className={classes.container}>
				{children}
			</div>
		</div>
	);
};

export default Container;