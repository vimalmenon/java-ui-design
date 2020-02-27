import * as React from "react";
import AceEditor from "react-ace";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import "ace-builds/src-noconflict/mode-text";
import "ace-builds/src-noconflict/theme-monokai";

import {ApiCaller} from "utility";
import {apiList} from "const";

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const {GetYoutubeScript, SaveYoutubeScript, DeleteYoutubeScript} = apiList;


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullWidth: {
        display: "flex"
    },
    items : {
        display: "flex",
        flexDirection: "column"
    },
    item : {
        display: "flex"
    },
    heading: {
        flex: "1 1 auto",
    },
    action : {
        flex : "0 0 100px"
    }
  }),
);


interface IScripts {
    id ?:number,
    heading: string,
    note: string
}

const YoutubeScript = () => {
    const [value, setValue] = React.useState<IScripts|null>(null);
    const [scripts, setScripts] = React.useState([]);
    React.useEffect(() => {
        new ApiCaller(new GetYoutubeScript())
        .success((data) => {
            setScripts(data);
        });
    }, []);
    const onSave = () => {
        new ApiCaller(new SaveYoutubeScript([value]))
        .success((data) => {
            setScripts(data);
        });
    };
    const onDelete = (script) => {
        new ApiCaller(new DeleteYoutubeScript(script))
        .success((data) => {
            setScripts(data);
        });
    };
    const classes = useStyles();
    return (
        <div>
            {value ? 
                <Card variant="outlined">
                    <CardHeader
                        title={
                            <TextField 
                                label="Heading"
                                className={classes.fullWidth}
                                value={value.heading}
                                onChange={(e: any) => setValue({...value, heading: e.target.value})} />
                        } />
                    <CardContent>
                        <AceEditor
                            placeholder="Note"
                            mode="text"
                            theme="monokai"
                            style={{width: "100%"}}
                            fontSize={14}
                            onChange={(note) => {setValue({...value, note})}}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={value.note}
                            setOptions={{
                                wrap: true,
                                enableBasicAutocompletion: true,
                                enableSnippets: false,
                                showLineNumbers: true,
                                tabSize: 4,
                                useSoftTabs: false,
                            }}/>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" onClick={onSave}>
                           Save
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => setValue(null)}>
                           Cancel
                        </Button>
                    </CardActions>
                </Card>
                :
                <div>
                    <div>
                        <button onClick={() => {setValue({heading: "", note: ""})}}>Create</button>
                    </div>
                    <div className={classes.items}>
                        {scripts.map((script: IScripts, key) => {
                            return (
                                <div key={key} className={classes.item}>
                                    <div className={classes.heading}>
                                        {script.heading}
                                    </div>
                                    <div className={classes.action}>
                                        <button onClick={() => {setValue(script)}}>Edit</button>
                                        <button onClick={() => {onDelete(script)}}>Delete</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        </div>
    );
};

export default YoutubeScript;