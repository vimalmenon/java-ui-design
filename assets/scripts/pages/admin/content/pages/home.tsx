import * as React from "react";
import Slide from "@material-ui/core/Slide";

export default function Home () {
	const [slide, setSlide] = React.useState(true);
	React.useEffect(() => {
		setSlide(true);
		return () => {
			setSlide(false);
		};
	});
	return (
		<Slide direction="right" in={slide} mountOnEnter unmountOnExit>
			<div>
				This is home page
			</div>
		</Slide>
	);
}