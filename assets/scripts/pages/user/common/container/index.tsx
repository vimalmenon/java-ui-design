import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex: "0 0 3.125rem",
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

const Container = ({dark, children}) => {
	const classes = useStyles(dark);
	return(
		<div className={classes.root}>
			<div className={classes.container}>
				{children}
			</div>
		</div>
	);
};

export default Container;