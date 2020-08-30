import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {Title, Container} from "../../../common";
import Details from "./details";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root:{
			display: "flex",
			flexDirection:"column",
			flex: "1 1 100%"
		},
		title:{
			display: "flex",
			margin:theme.spacing(4,0),
		},
		content: {
			display: "flex",
			flexDirection:"column",
			[theme.breakpoints.down("sm")]: {
				flexDirection:"column"
			},
		},
	});
});

const About = ({dark}) => {
	const classes = useStyles();
	return (
		<Container dark={dark} className={"about-me"}>
			<div className={classes.root}>
				<div className={classes.title}>
					<Title title={"About Me"} dark={false}/>
				</div>
				<div className={classes.content}>
					<Details />
					This is about me page
				</div>
			</div>
		</Container>
	);
};

export default About;