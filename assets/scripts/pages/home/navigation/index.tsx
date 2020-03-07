import * as React from "react";

import {
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme) => {
    return createStyles({
      root: {
        display: "flex",
      },
      toolbarSecondary: {
		justifyContent: "space-between",
		overflowX: "auto",
	  },
	  toolbarLink: {
	    padding: theme.spacing(1),
	    flexShrink: 0,
	  },
	});
});

const Navigation = () => {
	const classes = useStyles();
	return (
		<nav className={classes.root}>
			<Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
				<Link
		            color="inherit"
		            noWrap
		            variant="body2"
		            href={"./tutorial"}
		            className={classes.toolbarLink}>
	            		Home
          		</Link>
			</Toolbar>
		</nav>
	);
};

export default Navigation;