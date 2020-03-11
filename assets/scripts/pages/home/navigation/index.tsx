import * as React from "react";

import {
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {MainNavigation} from "const";


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
						console.log(navigation);
						return (
							<Link
								key={key}
					            color="inherit"
					            noWrap
					            variant="body2"
					            href={navigation.link}
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