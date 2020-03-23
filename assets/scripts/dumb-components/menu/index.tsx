import * as React from "react";

import Menu from "@material-ui/core/Menu";

import Item from "./item";


const MenuComponent = (props:any) => {
	const {open, children, element, ...rest} = props;
	const menu = React.Children.map(children, child =>{
		return React.cloneElement(child);
	});
	const transformOrigin = {
		vertical: "top", 
		horizontal: "right"
	};
	return (
		<Menu
			anchorEl={element}
			anchorOrigin={transformOrigin}
			keepMounted
			transformOrigin={transformOrigin}
			open={open}
			{...rest}>
			<div>
				{menu}
			</div>
		</Menu>
	);
};

MenuComponent.Item = Item;
export default MenuComponent;