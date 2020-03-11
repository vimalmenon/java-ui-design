import * as React from "react";

import {
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {MainNavigation} from "const";

import {
  Link
} from "react-router-dom";

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
				{MainNavigation.map((navigation, key) => {
					if (navigation.isShown) {
						return (
							<Link
								key={key}
					            to={navigation.link}
					            className={classes.toolbarLink}>
				            		{navigation.name}
			          		</Link>
						);
					}
				})}
				
			</Toolbar>
		</nav>
	);
};

export default Navigation;