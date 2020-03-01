import * as React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withRouter } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

import {
    createStyles,
    makeStyles,
} from '@material-ui/core/styles';

import {ApiCaller} from "utility";
import {navigationByName, apiList} from "const";

const {Login} = apiList;

import * as actions from "actions";

const useStyles = makeStyles(() => {
    return createStyles({
      root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
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
        const {signIn} = navigationByName;
        document.title = signIn.title;
        props.commonActions.setSelectedNavigation(signIn);
    });
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const onLogin = (username, password) => {
        new ApiCaller(new Login({
            username,
            password
        }));
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        className={classes.fullWidth}
                        required 
                        id="password" 
                        label="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password" />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        className={classes.fullWidth}
                        variant="contained" 
                        color="primary"
                        onClick={() => onLogin(username, password)}>
                        Login
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}


const mapStateToProps = (state : any) => {
    return {
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
		commonActions : bindActionCreators({...actions.common}, dispatch)
	};
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(LoginPage));