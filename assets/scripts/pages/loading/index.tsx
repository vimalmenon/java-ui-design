import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		loadingWrapper:{
			position:"fixed",
			top:"0",
			left:"0",
			width:"100%",
			height:"100%",
			zIndex:1000,
			backgroundColor:theme.palette.type==="light"?"#fff":"#424242"
		},
		loader: {
			display:"block",
			position:"relative",
			left:"50%",
			top: "50%",
			width: "150px",
			height: "150px",
			margin: "-75px 0 0 -75px",
			borderRadius: "50%",
			border: "3px solid transparent",
			borderTopColor: "#3498db",
			animation: "$spin 2s linear infinite",
			"&:before": {
				content: "''",
				position: "absolute",
				top: "5px",
				left: "5px",
				right: "5px",
				bottom: "5px",
				borderRadius: "50%",
				border: "3px solid transparent",
				borderTopColor: "#e74c3c",
				animation: "$spin 3s linear infinite",
			},
			"&:after": {
				content: "''",
				position: "absolute",
				top: "15px",
				left: "15px",
				right: "15px",
				bottom: "15px",
				borderRadius: "50%",
				border: "3px solid transparent",
				borderTopColor: "#f9c922",
				animation: "$spin 1.5s linear infinite",
			},
		},
		"@keyframes spin": {
			"0%": {
				transform: "rotate(0deg)"
			},
			"100%": {
				transform: "rotate(360deg)"
			}
		},
	});
});
const Loading = () => {
	const classes = useStyles();
	return (
		<div className={classes.loadingWrapper}>
			<div className={classes.loader}></div>
		</div>
	);
};

export default Loading;