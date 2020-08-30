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
		root:{
			display: "flex",
			flexDirection:"column",
			flex: "1 1 100%"
		},
		title: {
			display: "flex",
			margin:theme.spacing(4,0),
		},
		content: {
			display: "flex",
			flexDirection:"column",
			[theme.breakpoints.down("sm")]: {
				flexDirection:"column"
			},
		},
	});
});

const Tutorials = ({dark}) => {
	const classes = useStyles();
	return (
		<Container dark={dark} className={"tutorials"}>		
			<div className={classes.root}>
				<div className={classes.title}>
					<Title title={"Tutorials"} dark={false}/>
				</div>
				<div className={classes.content}>
					<LatestVideos />
					<PopularVideos />
				</div>
			</div>
		</Container>
	);
};

export default Tutorials;