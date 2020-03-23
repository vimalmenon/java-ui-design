import * as React from 'react';
import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import Box from '@material-ui/core/Box';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import {Tabs, ColorPicker} from "dumb-components";
import * as actions from "actions";
import { useTheme } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		section: {
			flex: 1,
		},
		parent : {
			display: "flex",
			flexDirection: "row",
		},
		darkColor : {
			background: theme.palette.background.default
		}
	}) 
});
function Setting (props: any) {
	const {preferencesActions} = props;
	const theme = useTheme();
	const {primary, secondary, error} = theme.palette;
	const [slide, setSlide] = React.useState(true)
	const [value, setValue] = React.useState(0)
	const [primaryColor, setPrimary] = React.useState(primary);
	const [secondaryColor, setSecondary] = React.useState(secondary);
	const [errorColor, setError] = React.useState(error.main);
	const classes = useStyles();
	React.useEffect(() => {
		setSlide(true);
		return () => {
			setSlide(false);
		}
	},[]);
	const items = [{
		label: "Primary",
		Component : () => {
			return (
				<Box p={3} className={classes.parent}>
					<div className={classes.section}>
						<ColorPicker 
							color={primary} 
							code={"500"}
							onColorChange={(value) => {setPrimary(value); preferencesActions.setPaletteColor({props: "primary", value})}}
							theme="primary" />
					</div>
				</Box>
			)
		}
	},
	{
		label: "Secondary",
		Component : () => {
			return (
				<Box p={3} className={classes.parent}>
					<div className={classes.section}>
						<ColorPicker 
							code={"A400"} 
							color={secondary} 
							onColorChange={(value) => {setSecondary(value); preferencesActions.setPaletteColor({props: "secondary", value})}}
							theme="secondary"/>
					</div>
				</Box>
			)
		}
	}];
	return (
		<Slide direction="right" in={slide} mountOnEnter unmountOnExit>
			<Grid container spacing={3}>
				<Grid item xs={12} md={8} lg={4} xl={3}>
					<Paper elevation={3} className={classes.darkColor}>
						<Tabs ariaLabel="Simple Tabs" value={value} items={items} onChange={setValue} />
					</Paper>
				</Grid>
			</Grid>
		</Slide>
	);
}

const mapStateToProps = (state : any) => {
	return {
		preferences: state.preferences
	}
}
  
function mapDispatchToProps(dispatch: any) {
	return {
		preferencesActions : bindActionCreators({...actions.preferences}, dispatch)
	};
}
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(Setting));