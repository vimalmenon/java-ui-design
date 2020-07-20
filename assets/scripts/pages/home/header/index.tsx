import * as React from "react";

import {
	createStyles,
	makeStyles,
} from "@material-ui/core/styles";

import {
	Link
} from "react-router-dom";
import { connect } from "react-redux";

import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

import {MainNavigation} from "const";

import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import IconButton from "@material-ui/core/IconButton";

import { bindActionCreators } from "redux";

import * as actions from "actions";

const useStyles = makeStyles((theme) => {
	return createStyles({
		root: {
			display: "flex",
			borderBottom: `1px solid ${theme.palette.divider}`,
			background: "#0c2340",
			justifyContent:"center"
		},
		toolbarLink: {
			padding: theme.spacing(1),
			flexShrink: 0,
			color:"white",
			textDecoration: "none"
		},
		toolbarTitle: {
			flex: 1,
			fontSize: "1rem",
			maxWidth: "1200px",
			flexBasis: "auto",
			flexGrow: 1
		},
		input: {
			marginLeft: theme.spacing(1),
			flex: 1,
		},
		iconButton: {
			padding: 10,
		},
		search : {
			display: "flex",
			color:"white"
		}
	});
});


const Header = (props) => {
	const classes = useStyles();
	const {preferences, preferencesActions} = props;
	let {palette} = preferences;
	return (
		<Toolbar className={classes.root}>
			<Typography
				color="inherit"
				noWrap
				className={classes.toolbarTitle}>
				<Link
					to={"/"}
					className={classes.toolbarLink}>
					Vimal Menon
				</Link>
				{MainNavigation.map((navigation, key) => {
					return(
						<Link
							key={key}
							to={navigation.link}
							className={classes.toolbarLink}>
							{navigation.name}
						</Link>
					);
				})}
			</Typography>
			{(palette.type ==="dark")?
				<IconButton aria-label="show 4 new mails" color="inherit" onClick={() => preferencesActions.toggleMode(palette.type)}>
					<BrightnessHighIcon className={classes.search}/>
				</IconButton> :
				<IconButton aria-label="show 4 new mails" color="inherit" onClick={() => preferencesActions.toggleMode(palette.type)}>
					<BrightnessLowIcon className={classes.search}/> 
				</IconButton>
				
			}
		</Toolbar>
	);
};

const mapStateToProps = (state : any) => {
	return {
		preferences: state.preferences,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		preferencesActions : bindActionCreators({...actions.preferences}, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);