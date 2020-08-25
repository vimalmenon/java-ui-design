import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


import {Title, Container} from "../../../common";
import LatestVideos from "./latest-videos";
import PopularVideos from "./popular-videos";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection:"column"
		}
	});
});

const Tutorials = ({dark}) => {
	const classes = useStyles();
	return (
		<Container dark={dark}>		
			<div className={classes.root}>
				<div>
					<Title title={"Tutorials"} dark={false}/>
				</div>
				<div>
					<LatestVideos />
					<PopularVideos />
				</div>
			</div>
		</Container>
	);
};

export default Tutorials;