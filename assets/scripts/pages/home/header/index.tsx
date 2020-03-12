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

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import DirectionsIcon from '@material-ui/icons/Directions';

import {MainNavigation} from "const";


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
  		input: {
	      marginLeft: theme.spacing(1),
	      flex: 1,
	    },
	    iconButton: {
	      padding: 10,
	    }
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
	        {MainNavigation.map((navigation, key) => {
	        	if (navigation.isShown) {
		        	return(
						<Link
							key={key}
				            to={navigation.link}
				            className={classes.toolbarLink}>
			            		{navigation.name}
		          		</Link>
		        	);
	        	}
	        })}
	        <Paper component="form" className={classes.root}>
				<IconButton className={classes.iconButton} aria-label="search">
					<SearchIcon />
				</IconButton>
				<InputBase
			        className={classes.input}
			        placeholder="Search" />
		      
		    </Paper>
		</Toolbar>
	);
};

export default Header;