import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display:"flex",
			flex:"0 0 50%",
			flexDirection:"column",
		},
		container : {
			display:"flex",
			flexDirection:"column",
			padding: theme.spacing(3,0),
		},
		contactLine: {
			margin: theme.spacing(0.5,0),
			display: "flex",
			justifyContent:"space-between",
			"& .name":{
				flex: "0 0 35%"
			},
			"& .email":{
				flex: "0 0 60%"
			}
		},
		arrowIcon: {
			fontSize:"1rem",
		}
		
	});
});

const ContactForm = () => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			<div className={classes.container}>
				<div className={classes.contactLine}>
					<div className="name">
						<TextField label="Your Name *" color="secondary" fullWidth={true}/>
					</div>
					<div className="email">
						<TextField label="Your Email"  color="secondary" fullWidth={true}/>
					</div>
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
						Send Message
						<ArrowForwardIcon className={classes.arrowIcon}/>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;