import * as React from "react";
import DialogActions from '@material-ui/core/DialogActions';

const Footer = (props) => {
	const {children, ...rest} = props;
	const footer = React.Children.map(children, child =>{
		return React.cloneElement(child);
	});
	return (
		<DialogActions {...rest}>
			{footer}
		</DialogActions>
	);
};

export default Footer;