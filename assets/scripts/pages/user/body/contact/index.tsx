import * as React from "react";
import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import {Title} from "../../common";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex: "0 0 3.125rem",
			justifyContent : "center",
			backgroundColor:(value)=> value?(theme.palette.type==="light")?"#F2F6F9":"#19191A":"",
			margin:theme.spacing(1,0),
		},
		container : {
			display:"flex",
			flex: "1 1 100%",
			margin: theme.spacing(1,0),
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
		contactForm: {
			display:"flex",
			flex:"1 1 60%",
			flexDirection:"column",
		},
		reachUs: {
			display:"flex",
			flex:"1 1 40%",
			flexDirection:"column",
		},
		contactLine: {
			margin: theme.spacing(0.5,0),
			"& .name":{
				width:"40%",
				margin:theme.spacing(0,0.5,0,0),
			},
			"& .email":{
				width:"55%"
			}
		}
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
							Reach Us
						</div>
						<div className={classes.contactForm}>
							<div className={classes.contactLine}>
								<TextField label="Your Name *" className="name" color="secondary" />
								<TextField label="Your Email" className="email" color="secondary" />
							</div>
							<div className={classes.contactLine}>
								<TextField label="Subject *" color="secondary" fullWidth={true}/>
							</div>
							<div className={classes.contactLine}>
								<TextField 
									fullWidth={true}
									label="Message *" 
									color="secondary" 
									multiline 
									rows={6}/>
							</div>
							<div className={classes.contactLine}>
								<Button variant="contained" color="secondary" >
									Save
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;