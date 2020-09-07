import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import{FollowUs} from "../../../../common";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display:"flex",
			flex:"0 0 40%",
			alignItems:"center",
			flexDirection:"column"
		},
		container:{
			display:"flex",
			padding: theme.spacing(5,0),
			flexDirection:"column",
			justifyContent:"space-around",
			flex:"1 1 100%"
		}
	});
});


const ContactText = ({contact}) => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			<div className={classes.container}>
				<div>
					{contact.details.map((detail, key) => {
						return (
							<div key={key}>
								{detail}
							</div>
						);
					})}
				</div>
				<div>
					<div>
						Follow us  : <FollowUs />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactText;