import Button from "@material-ui/core/Button";

import {
	Theme,
	withStyles,
	createStyles,
} from "@material-ui/core/styles";


const ButtonComponent = withStyles((theme: Theme) => {
	return createStyles({
		root: {
			//boxShadow : "0px 3px 1px -2px rgba(252,181,27,0.2), 0px 2px 2px 0px rgba(252,181,27,0.14), 0px 1px 5px 0px rgba(252,181,27,0.12)"
		},
	});
})(Button);

export default ButtonComponent;