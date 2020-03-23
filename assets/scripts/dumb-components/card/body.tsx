import * as React from "react";


import CardContent from '@material-ui/core/CardContent';

const Body = (props: any) => {
	const {children, ...rest} = props;
	const body = React.Children.map(children, child =>{
		return React.cloneElement(child);
	});
	return (
		<CardContent {...rest}>
			{body}
		</CardContent>
	)
};


export default Body;