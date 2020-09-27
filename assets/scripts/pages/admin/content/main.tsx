import * as React from "react";
import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import { 
	withRouter,
	Switch,
	Route, 
} from "react-router-dom";


import Breadcrumbs from "../common/dashboard-breadcrumbs";


import Home from "./pages/home";
import Notes from "./pages/notes";
import Admin from "./pages/admin";
import Profile from "./pages/profile";
import Expenses from "./pages/expenses";
import Calendar from "./pages/calendar";
import PageNotFound from "./pages/page-not-found";


const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		toolbar: {
			display: "flex",
			alignItems: "center",
			justifyContent: "flex-end",
			padding: theme.spacing(0,1),
			...theme.mixins.toolbar,
		},
		main: {
			flexGrow: 1,
			padding: theme.spacing(3),
			color: theme.palette.text.primary,
			display: "flex",
			flexFlow: "column"
		},
		breadcrumbs : {
			flex: "0 1 3em"
		},
		content : {
			flex: "1 1 auto"
		}
	});
});

const MainComponent = (props: any) => {    
	const classes = useStyles();
	const {match} = props;
	const {url} = match;
	return (
		<main className={classes.main}>
			<div className={classes.toolbar} />
			<div className={classes.breadcrumbs}>
				<Breadcrumbs />
			</div>
			<div className={classes.content}>
				<Switch>
					<Route exact path={`${url}/expenses`} component={Expenses} />
					<Route path={`${url}/calendar`} component={Calendar} />
					<Route path={`${url}/notes`} component={Notes} />
					<Route path={`${url}/profile`} component={Profile} />
					<Route path={`${url}/admin`} component={Admin} />
					<Route exact path={`${url}`} component={Home} />
					<Route path="*" component={PageNotFound} />
				</Switch>            
			</div>
		</main>
	);
};
  
export default withRouter(MainComponent);