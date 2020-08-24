import * as React from "react";

import Hero from "./hero";
import About from "./about";
import Contact from "./contact";
import Tutorials from "./tutorials";
import Projects from "./projects";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection:"column"
		},
	});
});
const Body = () => {
	const classes = useStyles();
	const hide = false;
	return (
		<div className={classes.root}>
			<Hero />
			<About dark={true}/>
			<Tutorials dark={false}/>
			{hide ? <Projects />: null}
			<Contact dark={true}/>
		</div>
	);
};

export default Body;