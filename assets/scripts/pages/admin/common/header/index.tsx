import * as React from "react";
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {
	Theme,
	makeStyles,
	createStyles,
	useTheme
} from '@material-ui/core/styles';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import * as actions from "actions";

import {drawerWidth, apiList} from "const";
import {ApiCaller} from "utility";

import MobileMenu from "./mobile-menu";
import DesktopMenu from "./desktop-menu";
import DialogGroups from "./dialog-groups";

const {LogOut, SwitchAccount} = apiList;


const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		grow: {
			flexGrow: 1,
		},
		appBar: {
			//backgroundColor: theme.palette.background.default,
			zIndex: theme.zIndex.drawer + 1,
			transition: theme.transitions.create(['width', 'margin'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarShift: {
			[theme.breakpoints.up('md')]: {
				marginLeft: drawerWidth,
				width: `calc(100% - ${drawerWidth}px)`,
				transition: theme.transitions.create(['width', 'margin'], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
			}
		},
		sectionDesktop: {
			display: 'none',
			[theme.breakpoints.up('md')]: {
				display: 'flex',
			},
		},
		sectionMobile: {
			display: 'flex',
			[theme.breakpoints.up('md')]: {
				display: 'none',
			},
		},
		menuButton: {
			color : theme.palette.primary.contrastText,
			marginRight: 16,
		},
		hide: {
			[theme.breakpoints.up('md')]: {
				display: 'none',
			}
		},
	});
});

const DashboardHeader = (props) => {
	const {preferences, common, preferencesActions, session} = props;
	const {groups} = common;
	const [model, setModel] = React.useState(false);
	const {palette, drawer} = preferences;
	const classes = useStyles();
	const theme = useTheme();
	const mobileMenuId = 'primary-search-account-menu-mobile';
	const onSwitchAccount = (group) => {
		new ApiCaller(new SwitchAccount(group));
	}
	const onLogOut = () => {
		new ApiCaller(new LogOut());
	}
	return (
		<AppBar
			className={clsx(classes.appBar, {[classes.appBarShift]: drawer,})}>
			<DialogGroups
				session={session} 
				onClose={() => setModel(false)}
				open={model}
				groups={groups}
				onSwitchAccount={onSwitchAccount} />
			<Toolbar>
				{/*<IconButton onClick={() => preferencesActions.toggleDrawer(drawer)}>
					{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
				</IconButton>*/}
				<IconButton
					color="primary"
					aria-label="open drawer"
					onClick={() => preferencesActions.toggleDrawer(drawer)}
					edge="start"
					className={clsx(classes.menuButton, {
						[classes.hide]: drawer,
					})}>
					<MenuIcon />
				</IconButton>
				<div className={classes.grow} />
				<DesktopMenu 
					preferencesActions={preferencesActions}
					groups={groups}
					setModel={setModel}
					className={classes.sectionDesktop} 
					mode={palette.type} 
					onLogOut={onLogOut} />  
				<MobileMenu 
					preferencesActions={preferencesActions}
					groups={groups}
					setModel={setModel}
					className={classes.sectionMobile} 
					mode={palette.type} 
					onLogOut={onLogOut} />
			</Toolbar>
		</AppBar>
	);
}
const mapStateToProps = (state) => {
	return {
		preferences: state.preferences,
		common : state.common,
		session: state.user.session
	}
}

function mapDispatchToProps(dispatch) {
	return {
		preferencesActions : bindActionCreators({...actions.preferences}, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(DashboardHeader));