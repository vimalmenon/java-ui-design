import * as React from "react";

import DialogContent from "@material-ui/core/DialogContent";

const Body = (props: any) => {
	const {children, ...rest} = props;
	const body = React.Children.map(children, child =>{
		return React.cloneElement(child);
	});
	return (
		<DialogContent {...rest}>
			{body}
		</DialogContent>
	);
};

export default Body;