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
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
			fontSize: "1rem"
  		},
  		input: {
	      marginLeft: theme.spacing(1),
	      flex: 1,
	    },
	    iconButton: {
	      padding: 10,
	    },
	    search : {
	    	display: "flex"
	    }
	});
});


const Header = () => {
	const classes = useStyles();
	return (
		
		<Toolbar className={classes.root}>
	        <Typography
	          color="inherit"
	          align="center"
	          noWrap
	          className={classes.toolbarTitle}>
	          	<Link
		            to={"/"}>
	            		Vimal Menon
          		</Link>
          		{MainNavigation.map((navigation, key) => {
		        	return(
						<Link
							key={key}
				            to={navigation.link}
				            className={classes.toolbarLink}>
			            		{navigation.name}
		          		</Link>
		        	);
	        	})}
	        </Typography>
		    <MoreVertIcon className={classes.search}/>
		</Toolbar>
	);
};

export default Header;