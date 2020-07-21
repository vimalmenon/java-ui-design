import TextField from "@material-ui/core/TextField";
import {colors} from "const";

const {lightBlue} = colors;

import {
	Theme,
	withStyles,
	createStyles,
} from "@material-ui/core/styles";


const Input = withStyles((theme: Theme) => {
	return createStyles({
		root: {
			"& label.Mui-focused": {
				color: lightBlue[500],
			},
			"& .MuiInput-underline:after": {
				borderBottomColor: lightBlue[500],
			},
			"& input:focus" : {
				color: lightBlue[500],
			}
		}
	});
})(TextField);


export default Input;