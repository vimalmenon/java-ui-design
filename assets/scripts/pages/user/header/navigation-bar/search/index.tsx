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


const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root:{
			display: "flex",
			height: "3.125rem",
			position:"absolute",
			backgroundColor:(theme.palette.type==="light")?theme.palette.background.paper:"#121212",
			width:"100%",
			margin: theme.spacing(1,0),
			alignItems : "center",
			[theme.breakpoints.up("lg")]: {
				display:"flex",
				width:`${theme.breakpoints.values.lg}px`,
			},
		},
		icon:{
			flex:"0 0 50px"
		},
		auto:{
			flex:"1 1 100%"
		},
		input : {
			float: "right",
			width: "100%",
			animation: `$myEffect 600ms ${theme.transitions.easing.easeInOut}`,
		},
		"@keyframes myEffect": {
			"0%": {
				width:"0%"
			},
			"100%": {
				width:"100%"
			}
		},
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
					<Input 
						placeholder="Search" 
						className={classes.input} 
						color="secondary"/>
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