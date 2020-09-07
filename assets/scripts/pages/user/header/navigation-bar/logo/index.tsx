import * as React from "react";
import {
	Link
} from "react-router-dom";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import { connect } from "react-redux";

import light from "../../../../images/logo/light.jpg";
import dark from  "../../../../images/logo/dark.png";

const useStyles = makeStyles((theme:Theme) => {
	console.log();
	return createStyles({
		root: {
			display: "flex",
			background : "white",
			height: "50px",
			flex: "0 0 182px",
			backgroundColor:(theme.palette.type==="light")?theme.palette.background.default:"#121212"
		},
		logo : {
			width: "100%"
		},
		dark : {
		}
	});
});

const Logo = ({preferences}) => {
	const {type} = preferences.palette;
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Link to={"/"}>
				{type==="light" ?
					<img 
						src={light} 
						alt={"Vimal Menon"} 
						className={classes.logo}/>:
					<img 
						src={dark} 
						alt={"Vimal Menon"} 
						className={classes.logo}/>
				}
			</Link>
		</div>
	);
};

const mapStateToProps = (state : any) => {
	return {
		preferences: state.preferences,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Logo);