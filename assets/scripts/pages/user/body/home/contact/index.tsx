import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {Element} from "react-scroll";

import {Title, Container} from "../../../common";

import ContactForm from "./contact-form";
import ContactText from "./contact-text";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root : {
			display: "flex",
			flexDirection:"column",
		},
		title: {
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
		contactFormText : {
			display: "flex",
			flex: "1 1 100%",
			justifyContent: "space-between",
			[theme.breakpoints.down("sm")]: {
				flexDirection:"column"
			},
		},
		name : {
			display: "flex",
			fontSize: "1.3rem",
		}
	});
});

const Contact = ({dark}) => {
	const classes = useStyles();
	return (
		<Container dark={dark}>
			<Element name="contact-us" className={classes.root}>
				<div className={classes.title}>
					<Title title={"Contact Us"} dark={false}/>
				</div>
				<div className={classes.content}>
					<div className={classes.name}>
						We&apos;d like to hear from you
					</div>
					<div className={classes.contactFormText}>
						<ContactText />
						<ContactForm />
					</div>
				</div>
			</Element>
		</Container>
	);
};

export default Contact;