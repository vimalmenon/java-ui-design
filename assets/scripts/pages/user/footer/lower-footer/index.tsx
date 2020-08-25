import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {version} from "const";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			background: theme.palette.type==="light"?"#001B34":"#222323",
			justifyContent : "center",
			color: "white",
			flex: "0 0 3.875rem",
		},
		container : {
			display:"flex",
			flexDirection:"row",
			flex: `1 1 100%`,
			alignItems : "center",
			margin: theme.spacing(0,1),
			justifyContent:"space-between",
			[theme.breakpoints.up("lg")]: {
				display:"flex",
				flex: `0 0 ${theme.breakpoints.values.lg}px`,
			},
		},
		footerName : {
			color:"#FA2B54"
		},
		span : {
			margin: theme.spacing(0,1)
		}
	});
});

const LowerFooter = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<p>
					<span className={classes.footerName}>
						VimalMenon.com  
					</span>
					<span className={classes.span}>
						&copy; All Right Reserved - 2020
					</span>
				</p>
				<p>
					v{version}
				</p>
			</div>
		</div>
	);
};

export default LowerFooter;