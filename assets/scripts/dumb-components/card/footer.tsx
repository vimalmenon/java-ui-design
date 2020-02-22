import * as React from "react";

import CardActions from '@material-ui/core/CardActions';

const Footer = (props: any) => {
	const {children, classes, ...rest} = props;
	const footer = React.Children.map(children, child =>{
		return React.cloneElement(child);
	});
	return (
      	<CardActions {...rest}>
      		{footer}
      	</CardActions>
	)
};


export default Footer;