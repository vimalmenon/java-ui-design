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
		}
	});
});
const Contact = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div>
				<Title title={"Follow us"} />
				<div>
					<div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;