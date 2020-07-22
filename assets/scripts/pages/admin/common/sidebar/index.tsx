import * as React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { Scrollbars } from "react-custom-scrollbars";

import {
	Theme,
	useTheme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import * as actions from "actions";

import {drawerWidth, navigations} from "const";

import Navigation from "./navigation";
import DashboardFooter from "./footer";
import Header from "./header";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
			whiteSpace: "nowrap",
			backgroundColor: theme.palette.primary.main,
			flexDirection : "column",
			display: "flex"
		},
		drawerOpen: {
			width: drawerWidth,      
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		drawerClose: {
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			overflowX: "hidden",
			width: theme.spacing(7) + 1,
			[theme.breakpoints.up("sm")]: {
				width: theme.spacing(8) + 1,
			},
		},
		toolbar: {
			display: "flex",
			alignItems: "center",
			justifyContent: "flex-end",
			padding: theme.spacing(0, 1),
			backgroundColor: "#0c2340",
			color: theme.palette.primary.contrastText,
			textAlign: "left",
			boxShadow: theme.shadows[4],
			...theme.mixins.toolbar,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		mobileSidebar : {
			display: "flex",
			[theme.breakpoints.up("md")]: {
				display: "none",    
			}
		},
		navigation : {
			flex : "1 1 auto"
		},
		fullHeight: {
			flex : "1 1 auto",
			"& >div" : {
				display : "flex",
				flexDirection : "column"
			}
		}
	});
});


function DashboardSidebar (props: any) {  
	const {preferences, preferencesActions, common, history} = props;
	const {navigationEntitlement} = common;
	const {drawer} = preferences;
	const classes = useStyles();
	const theme = useTheme();
	const {selectedNavigation} = common;
	return (
		<React.Fragment>
			<Hidden smDown implementation="css">
				<Drawer
					variant="permanent"
					className={clsx(classes.drawer, {
						[classes.drawerOpen]: drawer,
						[classes.drawerClose]: !drawer,
					})}
					classes={{
						paper: clsx({
							[classes.drawerOpen]: drawer,
							[classes.drawerClose]: !drawer,
						}),
					}}>
					<Scrollbars className={classes.fullHeight}>
						<Header theme={theme} actions={preferencesActions} drawer={drawer} classes={classes} />
						<Navigation navigations={navigations} selectedNavigation={selectedNavigation} history={history} classes={classes} navigationEntitlement={navigationEntitlement}/>
						<DashboardFooter drawer={drawer} />
					</Scrollbars>
				</Drawer>
			</Hidden>
			<Hidden smUp implementation="css">
				<Drawer
					variant="temporary"
					anchor={theme.direction === "rtl" ? "right" : "left"}
					open={!drawer}
					onClose={() => preferencesActions.toggleDrawer(drawer)}
					className={classes.mobileSidebar}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true,
					}}>
					<Scrollbars className={classes.fullHeight}>
						<Navigation navigations={navigations} selectedNavigation={selectedNavigation} history={history} classes={classes} navigationEntitlement={navigationEntitlement}/>
						<DashboardFooter drawer={drawer} />
					</Scrollbars>
				</Drawer>
			</Hidden>
		</React.Fragment>
	);
}

const mapStateToProps = (state : any) => {
	return {
		preferences: state.preferences,
		common : state.common
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		preferencesActions : bindActionCreators({...actions.preferences}, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(DashboardSidebar));