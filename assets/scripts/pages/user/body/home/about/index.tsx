import * as React from "react";

import {Title} from "../../../common";
import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import Details from "./details";

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
			margin: theme.spacing(1,0),
			[theme.breakpoints.up("lg")]: {
				display:"flex",
				flex: `0 0 ${theme.breakpoints.values.lg}px`,
			},
		}
	});
});

const About = ({dark}) => {
	const classes = useStyles(dark);
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<div>
					<div>
						<Title title={"About Me"} dark={false}/>
					</div>
					<div>
						<Details />
						This is about me page
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;