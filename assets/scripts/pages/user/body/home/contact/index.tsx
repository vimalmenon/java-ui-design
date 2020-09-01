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
		element: {
			display: "flex",
			flexDirection:"column",
		},
		root : {
			display: "flex",
			flexDirection:"column",
			margin:theme.spacing(10,0),
		},
		title: {
			display: "flex",
			margin:theme.spacing(10,0),
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
		<Element name="contact-us" className={classes.element}>
			<Container dark={dark}>
				<div className={classes.root}>
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
				</div>
			</Container>
		</Element>
	);
};

export default Contact;