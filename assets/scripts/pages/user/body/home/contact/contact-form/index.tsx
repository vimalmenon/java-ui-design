import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import {ApiCaller} from "utility";
import {apiList} from "const";


const {SaveContact} = apiList;

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
			padding: theme.spacing(5,0),
		},
		contactLine: {
			margin: theme.spacing(2,0),
			display: "flex",
			justifyContent:"space-between",
			"& .name":{
				flex: "0 0 35%"
			},
			"& .email":{
				flex: "0 0 60%"
			}
		},
		contactButton: {
			margin: theme.spacing(4,0),
			display: "flex",
			justifyContent:"space-between",
		},
		arrowIcon: {
			fontSize:"1rem",
		}
		
	});
});

const ContactForm = () => {
	const classes = useStyles();
	const [contact, setContact] = React.useState<any>({});
	const onUpdate = (e) => {
		const {name, value} = e.target;
		setContact({...contact, [name]:value});
	};
	const onSave = () => {
		new ApiCaller(new SaveContact(contact))
			.success(() => {
				setContact({});
			});
	};
	return (
		<section className={classes.root}>
			<div className={classes.container}>
				<div className={classes.contactLine}>
					<div className="name">
						<TextField
							label="Your Name *"
							color="secondary"
							fullWidth={true}
							name="name"
							value={contact.name ||""}
							onChange={onUpdate}/>
					</div>
					<div className="email">
						<TextField
							label="Your Email"
							color="secondary"
							fullWidth={true}
							name="emailAddress"
							value={contact.emailAddress ||""}
							onChange={onUpdate}/>
					</div>
				</div>
				<div className={classes.contactLine}>
					<TextField 
						label="Subject *"
						color="secondary"
						fullWidth={true}
						name="subject"
						value={contact.subject ||""}
						onChange={onUpdate}/>
				</div>
				<div className={classes.contactLine}>
					<TextField 
						fullWidth={true}
						label="Message *" 
						color="secondary" 
						multiline 
						rows={6}
						name="message"
						value={contact.message ||""}
						onChange={onUpdate}/>
				</div>
				<div className={classes.contactButton}>
					<Button 
						variant="contained" 
						color="secondary" 
						onClick={onSave}>
						Send Message
						<ArrowForwardIcon className={classes.arrowIcon}/>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;