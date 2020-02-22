import * as React from "react";

import Card from "@material-ui/core/Card";

import Header from "./header";
import Body from "./body";
import Footer from "./footer";

const CardComponent = (props: any) => {
	const {children, classes, ...rest} = props;
	const cards = React.Children.map(children, child =>{
		return React.cloneElement(child);
	});
	return (
		<Card {...rest}>
	      {cards}
		</Card>
	)
};

CardComponent.Header = Header;
CardComponent.Footer = Footer;
CardComponent.Body = Body;

export default CardComponent;