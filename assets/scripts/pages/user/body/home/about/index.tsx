import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {Element} from "react-scroll";

import {Title, Container} from "../../../common";
import Details from "./details";

import {ApiCaller} from "utility";
import {apiList} from "const";

const {AboutMe} = apiList;

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		element: {
			display: "flex",
			flexDirection:"column",
		},
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
	React.useEffect(() => {
		new ApiCaller(new AboutMe())
			.success((data) => {
				console.log(data);
			});
	}, []);
	return (
		<Element name="about-me" className={classes.element}>
			<Container dark={dark} >
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
		</Element>
	);
};

export default About;