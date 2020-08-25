import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";



import {Title} from "../../../common";

import ContactForm from "./contact-form";
import ContactText from "./contact-text";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex: "0 0 3.125rem",
			justifyContent : "center",
			backgroundColor:(value)=> value?(theme.palette.type==="light")?"#F2F6F9":"#19191A":"",
			margin:theme.spacing(4,0),
			
		},
		container : {
			display:"flex",
			flex: "1 1 100%",
			margin:theme.spacing(1,1),
			padding:theme.spacing(3,0),
			[theme.breakpoints.up("lg")]: {
				display:"flex",
				flex: `0 0 ${theme.breakpoints.values.lg}px`,
			},
		},
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
	const classes = useStyles(dark);
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<div className={classes.section}>
					<div className={classes.title}>
						<Title title={"Contact Us"} dark={false}/>
					</div>
					<div className={classes.content}>
						<ContactText />
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;