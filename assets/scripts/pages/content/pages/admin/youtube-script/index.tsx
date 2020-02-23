import * as React from "react";
import AceEditor from "react-ace";

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";


const YoutubeScript = () => {
    const [value, setValue] = React.useState({heading: "", note: ""});
    const onSave = () => {
        console.log(value);
    }
    return (
        <div>
            <TextField 
                label="Heading"
                value={value.heading}
                onChange={(e: any) => setValue({...value, heading: e.target.value})} />
           <AceEditor
                placeholder="Note"
                mode="markdown"
                theme="monokai"
                style={{width: "100%"}}
                fontSize={14}
                onChange={(note) => {setValue({...value, note})}}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={value.note}
                setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
                }}/>

            <div>
                <Button variant="contained" color="primary" onClick={onSave}>
                   Save
                </Button>
            </div>
        </div>
    );
};

export default YoutubeScript;