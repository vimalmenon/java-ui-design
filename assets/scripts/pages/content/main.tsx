import * as React from 'react';
import {
    Theme,
    makeStyles,
    createStyles
} from '@material-ui/core/styles';


import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { 
    withRouter,
    Switch,
    Route, 
} from "react-router-dom";

import Breadcrumbs from "../common/dashboard-breadcrumbs";

import Home from "./pages/home";
import Notes from "./pages/notes";
import Profile from "./pages/profile";
import Preference from "./pages/preference";
import Admin from "./pages/admin"
import Calendar from "./pages/calendar";
import Expenses from "./pages/expenses";
import PageNotFound from "./pages/page-not-found";

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        main: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
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
    }) 
});

function MainComponent (props: any) {    
    const classes = useStyles();
    return (
        <main className={classes.main}>
            <div className={classes.toolbar} />
            <div className={classes.breadcrumbs}>
                <Breadcrumbs />
            </div>
            <div className={classes.content}>
                <Switch>
                    <Route exact path="/expenses" component={Expenses} />
                    <Route path="/calendar" component={Calendar} />
                    <Route path="/preference" component={Preference} />
                    <Route path="/notes" component={Notes} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/admin" component={Admin} />
                    <Route exact path="/" component={Home} />
                    <Route path="*" component={PageNotFound} />
                </Switch>            
            </div>
        </main>
    );
}

const mapStateToProps = (state : any) => {
    return {
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
		actions : bindActionCreators({}, dispatch)
	};
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(MainComponent));