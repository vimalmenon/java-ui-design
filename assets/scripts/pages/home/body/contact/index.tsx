import * as React from "react";

import {
	createStyles,
	makeStyles
} from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

import {ApiCaller} from "utility";
import {apiList} from "const";

const {ApiSaveContact} = apiList;

import {Button} from "components";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column"
		}
	});
});


const Contact = () => {
	const classes = useStyles();
	const [contact, setContact] = React.useState({});
	//const [error, setError] = React.useState(null);
	const onSave = () => {
		new ApiCaller(new ApiSaveContact(contact));
	};
	const onUpdate = (e) => {
		const {name, value} = e.target;
		setContact({
			...contact,
			[name]: value
		});
	};
	return (
		<section className={classes.root}>
			<div>
				<TextField 
					required 
					label="Name"
					name="name"
					color="secondary"
					onChange={onUpdate} />
			</div>
			<div>
				<TextField 
					required 
					label="Email Address"
					name="emailAddress"
					onChange={onUpdate} />
			</div>
			<div>
				<TextField 
					required 
					label="Subject"
					name="subject"
					onChange={onUpdate} />
			</div>
			<div>
				<TextField 
					required 
					label="Message"
					multiline
					rows="4"
					name="message"
					onChange={onUpdate} />
			</div>
			<div>
				<Button variant="contained" color="primary" onClick={onSave}>
					Save
				</Button>
			</div>
		</section>
	);
};

export default Contact;