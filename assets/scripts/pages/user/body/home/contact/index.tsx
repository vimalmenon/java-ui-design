import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";



import {Title} from "../../../common";

import ContactForm from "./contact-form";

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
			margin: theme.spacing(1,0),
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
			flex: "1 1 100%"
		},
		reachUs: {
			display:"flex",
			flex:"1 1 50%",
			flexDirection:"column",
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
						<div className={classes.reachUs}>
							<div>
								<div>
									DON’T BE A STRANGER, JUST SAY HELLO
								</div>
								<div>
									Feel free to get in touch with us. We are always open to discussing new projects, creative ideas or opportunities to be part of your visions.
								</div>
								<div>
									Follow us
								</div>
								<div>
									youtube
									instagram
								</div>
							</div>
							<div>

							</div>
						</div>
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;