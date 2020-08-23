import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex: "0 0 3.125rem",
			position:"absolute",
			backgroundColor:"white",
			color:"black"
		}
	});
});

const Search = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			Search
		</div>
	);
};

export default Search;