import * as React from "react";

import Slide from "@material-ui/core/Slide";


const GoogleDrive = () => {
	const [slide, setSlide] = React.useState(true);
	const [drive, setDrive] = React.useState({children :[]});
	React.useEffect(() => {
		setSlide(true);
		return () => {
			setSlide(false);
		};
	}, []);
	return (
		<Slide direction="right" in={slide} mountOnEnter unmountOnExit>
			<div>
				{drive.children && drive.children.map((child: any, key)=> {
					return (
						<div key={key}>
							{child.name}
						</div>
					);
				})}
			</div>
		</Slide>
	);
};

export default GoogleDrive;