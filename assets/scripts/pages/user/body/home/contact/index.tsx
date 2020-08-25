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
			flex: "1 1 100%",
			margin:theme.spacing(4,0),
		},
		content: {
			display: "flex",
			flex: "1 1 100%",
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
			<div className={classes.section}>
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
	);
};

export default Contact;