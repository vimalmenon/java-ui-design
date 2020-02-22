import * as React from "react";

import Typography from '@material-ui/core/Typography';

const Panel = (props: any) => {
	const {children, index, selectedTab, ariaLabel, ...rest} = props;
	const panel = React.Children.map(children, child =>{
		return React.cloneElement(child);
	});
	return (
		<Typography
	        component="div"
	        role="tabpanel"
	        hidden={index !== selectedTab}
	        id={`${ariaLabel}-tabpanel-${index}`}
	        aria-labelledby={`${ariaLabel}-tab-${index}`}
	        {...rest}>
				{panel}
		</Typography>
	);
	
};

export default Panel;