import * as React from "react";

import {
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";

import {
    Switch,
    Route, 
    withRouter
} from "react-router-dom";
import {replaceUrlBackslashAtEnd} from "utility";
import {MainUrlMapper} from "const";


import About from "./about";
import Contact from "./contact";
import Tutorials from "./tutorials";
import Home from "./home";

const useStyles = makeStyles((theme) => {
    return createStyles({
      root: {
        display: "flex",
      }
	});
});


const Body =(props) => {
	const classes = useStyles();
	let {location} = props;
	React.useEffect(() => {
		let {pathname} = location;
		if (MainUrlMapper[replaceUrlBackslashAtEnd(pathname)]) {
			document.title = MainUrlMapper[replaceUrlBackslashAtEnd(pathname)].title;
		}
	});
	return (
		<section className={classes.root}>
			<Route exact path={`/`} component={Home} />
			<Route path={`/about`} component={About} />
			<Route path={`/contact`} component={Contact} />
			<Route path={`/tutorials`} component={Tutorials} />
		</section>
	)
};

export default withRouter(Body);