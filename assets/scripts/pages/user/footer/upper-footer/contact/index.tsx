import * as React from "react";
import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {Title, FollowUs} from "../../../common";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex:"1 1 50%",
			flexDirection:"column",
			margin: theme.spacing(3,0),
		},
		title : {
			display: "flex",
			margin: theme.spacing(1,0),
		},
		container :{
			display: "flex",
			margin: theme.spacing(1,0),
		}
	});
});
const Contact = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.title}>
				<Title title={"Follow us"} />
			</div>
			<div className={classes.container}>
				<FollowUs />
			</div>
		</div>
	);
};

export default Contact;