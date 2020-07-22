import Input from "@material-ui/core/Input";

import {
	Theme,
	withStyles,
	createStyles,
} from "@material-ui/core/styles";


const InputComponent = withStyles((theme: Theme) => {
	return createStyles({
		root: {
		}
	});
})(Input);

export default InputComponent;