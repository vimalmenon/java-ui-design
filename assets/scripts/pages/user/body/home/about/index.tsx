import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {Element} from "react-scroll";

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
		<Container dark={dark} >
			<Element name="about-me" className={classes.root}>
				<div className={classes.title}>
					<Title title={"About Me"} dark={false}/>
				</div>
				<div className={classes.content}>
					<Details />
					This is about me page
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</Element>
		</Container>
	);
};

export default About;