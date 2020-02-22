import * as React from "react";

import MenuItem from '@material-ui/core/MenuItem';

const Item = (props:any) => {
	const {children, ...rest} = props;
	const item = React.Children.map(children, child =>{
		return React.cloneElement(child);
	});
	return (
		<MenuItem
			{...rest}>
			{item}
		</MenuItem>
	);
	
};

export default Item;