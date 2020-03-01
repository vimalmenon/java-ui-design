import * as React from 'react';
import {ApiCaller} from "utility";


import Slide from '@material-ui/core/Slide';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import {
    Theme,
    makeStyles,
    createStyles
} from "@material-ui/core/styles";

import {apiList} from "const";

const {GetProfile, SaveProfile} = apiList;


const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        input: {
            flex: 1
        },
        margin : {
            margin: "20px 0",
        },
        paper : {
            padding : "20px",
            flex: 1,
            background: theme.palette.background.default
        }
    }) 
});


export default function Profile () {
    const [slide, setSlide] = React.useState(true);
    const [profile, setProfile] = React.useState({name: null, emailAddress: null, location: null});
    const classes = useStyles();
    React.useEffect(() => {
        setSlide(true);
        new ApiCaller(new GetProfile())
        .success((data: any) => {
            setProfile(data);
        });
        return () => {
            setSlide(false);
        }
    },[]);
    const onSave = () => {
        new ApiCaller(new SaveProfile(profile))
        .success((data: any) => {
            setProfile(data);
        });
    }
    return (
        <Slide direction="right" in={slide} mountOnEnter unmountOnExit>
            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <Paper className={classes.paper}>
                    <Grid container className={classes.margin}>
                        <TextField 
                            label="Name"
                            className={classes.input}
                            value={profile.name || ""}
                            onChange={(e: any) => setProfile({...profile, name: e.target.value})} />
                    </Grid>
                    <Grid container className={classes.margin}>
                        <TextField 
                            label="Email address"
                            className={classes.input}
                            value={profile.emailAddress || ""} 
                            onChange={(e: any) => setProfile({...profile, emailAddress: e.target.value})} />
                    </Grid>
                    <Grid container className={classes.margin}>
                        <TextField 
                            label="Location"
                            className={classes.input}
                            value={profile.location || ""} 
                            onChange={(e: any) => setProfile({...profile, location: e.target.value})}/>
                    </Grid>
                    <Grid container className={classes.margin}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            className={classes.input}
                            onClick={onSave}>
                            Save
                        </Button>
                    </Grid>
                </Paper>
              </Grid>
            </Grid>
        </Slide>
    )
}