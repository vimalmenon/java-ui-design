import * as React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
	createStyles,
	makeStyles,
	ThemeProvider,
	createMuiTheme,
} from "@material-ui/core/styles";

import {storage} from "const";
import * as actions from "actions";

import Header from "./header";
import Body from "./body";
import Footer from "./footer";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column"
		}
	});
});

const Home = (props) => {
	const classes = useStyles();
	let {preferencesActions} = props;
	let {palette} = props.preferences;
	const theme = createMuiTheme({
		palette : {
			...palette
		}
	});
	React.useEffect(() => {
		let localStorage = storage.selectStorage("local").getStorage();
		if (localStorage["preferences"]) {
			preferencesActions.setPreferences({...localStorage["preferences"]});
		}
	}, []);
	return (
		<div className={classes.root}>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Header />
				<Container maxWidth="lg">
					<Body />
				</Container>
				<Footer />
			</ThemeProvider>
		</div>
	);
};

const mapStateToProps = (state : any) => {
	return {
		preferences: state.preferences,
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		preferencesActions : bindActionCreators({...actions.preferences}, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);