import * as React from "react";
import DialogTitle from '@material-ui/core/DialogTitle';

const Header = (props: any) => {
	const {children, ...rest} = props;
	return(
		 <DialogTitle {...rest}>
        	{children}
    	</DialogTitle>
	);
};

export default Header;