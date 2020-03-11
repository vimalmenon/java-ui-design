import * as React from "react";

import {
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";

import { 
    Switch,
    Route, 
} from "react-router-dom";


import About from "./about";
import Contact from "./contact";
import Tutorials from "./tutorials";


const useStyles = makeStyles((theme) => {
    return createStyles({
      root: {
        display: "flex",
      }
	});
});


const Body =() => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			<Route path={`/`} component={About} />
			<Route path={`/contact`} component={Contact} />
			<Route path={`/tutorials`} component={Tutorials} />
		</section>
	)
};

export default Body;