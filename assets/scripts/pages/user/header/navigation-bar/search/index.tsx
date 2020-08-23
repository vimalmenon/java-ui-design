import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";


const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root:{
			display: "flex",
			height: "3.125rem",
			position:"absolute",
			backgroundColor:(theme.palette.type==="light")?theme.palette.background.paper:"#121212",
			color:"black",
			width:`${theme.breakpoints.values.lg}px`,
			margin: theme.spacing(1,0),
			alignItems : "center",
		},
		icon:{
			flex:"0 0 70px"
		},
		auto:{
			flex:"1 1 100%"
		}
	});
});

const Search = ({search, setSearch}) => {
	const classes = useStyles();
	if (search){
		return (
			<div className={classes.root}>
				<IconButton className={classes.icon}>
					<SearchIcon />
				</IconButton>
				<div className={classes.auto}>
					<Input placeholder="Search" fullWidth={true}/>
				</div>
				<IconButton className={classes.icon} onClick={()=>setSearch(!search)}>
					<CloseIcon />
				</IconButton>
			</div>
		);
	}
	return null;
};

export default Search;