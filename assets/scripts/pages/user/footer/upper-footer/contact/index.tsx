import * as React from "react";
import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {Title} from "../../../common";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex:"1 1 50%",
			margin: theme.spacing(1),
		}
	});
});
const Contact = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Title title={"Follow us"} />
			<div>
				<div>
				</div>
			</div>
		</div>
	);
};

export default Contact;