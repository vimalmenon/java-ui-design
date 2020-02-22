import * as React from "react";

import Dialog from '@material-ui/core/Dialog';

import Header from "./header";
import Body from "./body";
import Footer from "./footer";

const DialogComponent = (props: any) => {
	const {children, showDialog, ...rest} = props;
	const dialog = React.Children.map(children, child =>{
		return React.cloneElement(child);
	});
	return (
		<Dialog
			open={showDialog}
			{...rest}>
			{dialog}
		</Dialog>
	);
};

DialogComponent.Header = Header;
DialogComponent.Body = Body;
DialogComponent.Footer = Footer;
export default DialogComponent;