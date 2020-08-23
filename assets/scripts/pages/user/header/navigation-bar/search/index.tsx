import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			height: "3.125rem",
			position:"absolute",
			backgroundColor:(theme.palette.type==="light")?theme.palette.background.paper:"#121212",
			color:"black",
			width:`${theme.breakpoints.values.lg}px`,
			margin: theme.spacing(1,0),
			alignItems : "center",
		}
	});
});

const Search = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<IconButton>
				<SearchIcon />
			</IconButton>
			<IconButton>
				<CloseIcon />
			</IconButton>
		</div>
	);
};

export default Search;