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
		root: {
			display: "flex",
			flexDirection:"column"
		}
	});
});

const About = ({dark}) => {
	const classes = useStyles();
	return (
		<Container dark={dark}>
			<div className={classes.root}>
				<div>
					<Title title={"About Me"} dark={false}/>
				</div>
				<div>
					<Details />
					This is about me page
				</div>
			</div>
		</Container>
	);
};

export default About;