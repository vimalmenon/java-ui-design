import * as React from "react";

import {
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import {version} from "const";

const useStyles = makeStyles((theme) => {
    return createStyles({
      footer: {
        backgroundColor: theme.palette.background.paper,
	    padding: theme.spacing(6, 0),
      }
	});
});

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
	        <Typography variant="body2" color="textSecondary" align="center">
		      {'Copyright © '}
		      <Link color="inherit" href="https://vimalmenon.com/">
		        VimalMenon.com
		      </Link>{' '}
		      {new Date().getFullYear()}
		      {'.'}
		      version : {version}
		    </Typography>
    	</footer>
	);
};

export default Footer;