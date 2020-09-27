import * as React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withRouter } from "react-router-dom";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


import Typography from "@material-ui/core/Typography";

import {
	createStyles,
	makeStyles,
} from "@material-ui/core/styles";

import {ApiCaller} from "utility";
import {apiList, storage, headers} from "const";
import * as actions from "actions";

const {Login} = apiList;

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: "85%"
		},
		signInContainer: {
			maxWidth: "800px",
			border: "1px solid gray",
			borderRadius: "5px"
		},
		fullWidth : {
			width: "100%"
		}
	});
});

function LoginPage (props) {
	const classes  = useStyles();
	React.useEffect(() => {
		//const {signIn} = navigationByName;
		//document.title = signIn.title;
		//props.commonActions.setSelectedNavigation(signIn);
	});
	const [credential, setCredential] = React.useState<any>({});
	const [showPassword, setShowPassword] = React.useState(false);
	const onLogin = (event) => {
		if (credential.username && credential.password) {
			new ApiCaller(new Login(credential))
				.success((data) => {
					storage.selectStorage("session").addToStorage({"Authorization": data});
					headers.setAuthorization(data);
				});
		} else {
			event.preventDefault();
		}
	};
	return (
		<div className={classes.root}>
			<CssBaseline />
			<form onSubmit={(e) => e.preventDefault()} autoComplete="off">
				<Grid container spacing={3} className={classes.signInContainer}>
					<Grid item xs={12}>
						<Typography variant="h4" align="center">
							Sign In
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<TextField 
							className={classes.fullWidth}
							required 
							id="username" 
							label="Username" 
							value={credential.username || ""}
							onChange={(e) => setCredential({...credential,"username": e.target.value})}
							placeholder="Username"/>
					</Grid>
					<Grid item xs={12}>
						<FormControl className={classes.fullWidth}>
							<InputLabel htmlFor="standard-adornment-password">Password *</InputLabel>
							<Input
								id="standard-adornment-password"
								type={showPassword ? "text" : "password"}
								value={credential.password || ""}
								onChange={(e) => setCredential({...credential,"password": e.target.value})}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={() => setShowPassword(!showPassword)}>
											{showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								} />
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Button 
							type="submit"
							className={classes.fullWidth}
							variant="contained" 
							color="primary"
							onClick={(event) => onLogin(event)}>
							Login
						</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	);
}


const mapStateToProps = (state: any) => {
	return {
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		commonActions : bindActionCreators({...actions.common}, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(LoginPage));