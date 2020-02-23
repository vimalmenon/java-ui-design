import * as React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";


const YoutubeScript = () => {
    const [value, setValue] = React.useState("");
    return (
        <div>
           <AceEditor
                placeholder="Note"
                mode="markdown"
                theme="monokai"
                style={{width: "100%"}}
                fontSize={14}
                onChange={(e) => {setValue(e)}}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={value}
                setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
                }}/>
        </div>
    );
};

export default YoutubeScript;