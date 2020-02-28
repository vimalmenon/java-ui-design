import * as React from "react";
import AceEditor from "react-ace";

import Button from '@material-ui/core/Button';

import "ace-builds/src-noconflict/mode-text";
import "ace-builds/src-noconflict/theme-monokai";

import {ApiCaller} from "utility";
import {apiList} from "const";

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import {TextField, Card} from "dumb-components";

const {GetYoutubeScript, SaveYoutubeScript, DeleteYoutubeScript} = apiList;


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardHeading : {
        display: "flex"
    },
    fullWidth: {
        display: "flex",
        flex: "1 1 auto",
        marginRight: "5px"
    },
    sequence : {
        display: "flex",
        flex: "0 0 100px"
    },
    items : {
        display: "flex",
        flexDirection: "column"
    },
    item : {
        display: "flex",
        margin: "5px 0"
    },
    heading: {
        flex: "1 1 auto",
        lineHeight: "28px"
    },
    action : {
        flex : "0 0 200px",
        "& button" : {
            margin: "0 5px"
        }
    }
  }),
);


interface IScripts {
    id ?:number,
    heading: string,
    note: string,
    sequence ?: number
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
                    <Card.Header
                        title={
                            <div className={classes.cardHeading}>
                                <TextField 
                                    label="Heading"
                                    className={classes.fullWidth}
                                    value={value.heading}
                                    onChange={(e: any) => setValue({...value, heading: e.target.value})} />
                                <TextField 
                                    label="Sequence"
                                    className={classes.sequence}
                                    value={value.sequence ||""}
                                    onChange={(e: any) => setValue({...value, sequence: e.target.value})} />
                            </div>
                        } />
                    <Card.Body>
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
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="contained" color="primary" onClick={onSave}>
                           Save
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => setValue(null)}>
                           Cancel
                        </Button>
                    </Card.Footer>
                </Card>
                :
                <div>
                    <div>
                        <Button variant="contained" color="primary" onClick={() => {setValue({heading: "", note: ""})}}>Create</Button>
                    </div>
                    <div className={classes.items}>
                        {scripts.map((script: IScripts, key) => {
                            return (
                                <div key={key} className={classes.item}>
                                    <div className={classes.heading}>
                                        {script.heading}
                                    </div>
                                    <div className={classes.action}>
                                        <Button variant="contained" color="primary" onClick={() => {setValue(script)}}>Edit</Button>
                                        <Button variant="contained" color="primary" onClick={() => {onDelete(script)}}>Delete</Button>
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