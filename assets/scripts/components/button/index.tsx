import Button from "@material-ui/core/Button";

import {
	Theme,
	withStyles,
	createStyles,
} from "@material-ui/core/styles";


const ButtonComponent = withStyles((theme: Theme) => {
	return createStyles({
		root: {
			backgroundColor: "red",
			"&:hover": {
				backgroundColor: "green"
			}
		},
	});
})(Button);

export default ButtonComponent;