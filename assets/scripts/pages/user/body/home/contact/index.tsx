import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


import {Title, Container} from "../../../common";

import ContactForm from "./contact-form";
import ContactText from "./contact-text";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		section : {
			display: "flex",
			flexDirection:"column",
			flex: "1 1 100%"
		},
		title: {
			display: "flex",
			flex: "1 1 100%"
		},
		content: {
			display: "flex",
			flex: "1 1 100%",
			[theme.breakpoints.down("sm")]: {
				flexDirection:"column-reverse"
			},
		},
	});
});

const Contact = ({dark}) => {
	const classes = useStyles();
	return (
		<Container dark={dark}>
			<div className={classes.section}>
				<div className={classes.title}>
					<Title title={"Contact Us"} dark={false}/>
				</div>
				<div className={classes.content}>
					<ContactText />
					<ContactForm />
				</div>
			</div>
		</Container>
	);
};

export default Contact;