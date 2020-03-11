import * as React from "react";

import {
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";

import {
  Link
} from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";


const useStyles = makeStyles((theme) => {
    return createStyles({
		root: {
			display: "flex",
			borderBottom: `1px solid ${theme.palette.divider}`,
		},
		toolbarLink: {
			padding: theme.spacing(1),
			flexShrink: 0,
		},
		toolbarTitle: {
			flex: 1,
  		},
	});
});


const Header = () => {
	const classes = useStyles();
	return (
		
		<Toolbar className={classes.root}>
	        <Typography
	          component="h2"
	          variant="h5"
	          color="inherit"
	          align="center"
	          noWrap
	          className={classes.toolbarTitle}>
	          	<Link
		            to={"/"}>
	            		Vimal Menon
          		</Link>
	        </Typography>
	        <IconButton>
	          <SearchIcon />
	        </IconButton>
		</Toolbar>
	);
};

export default Header;