import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display:"flex",
			flex:"1 1 40%",
			flexDirection:"column",
		},
		container:{
			display:"flex",
			flexDirection:"column",
			padding: theme.spacing(1),
		}
	});
});


const ContactText = () => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			<div className={classes.container}>
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
		</section>
	);
};

export default ContactText;