import * as React from "react";

const LazyLoading = (props) => {
	let {path} = props;
	const [Component, setComponent] = React.useState<any | null>(null);
	setTimeout(() => {
		path().then((module) => {
			setComponent(module);
		});
	}, 5000);
	if (Component) {
		return (<Component.default />);
	} else {
		return (
			<div>
				this is lazy loading
			</div>
		);
	}
	
};


export default LazyLoading;