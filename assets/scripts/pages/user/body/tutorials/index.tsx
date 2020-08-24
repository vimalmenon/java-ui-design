import * as React from "react";
import {Title} from "../../common";
import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


import LatestVideos from "./latest-videos";
import PopularVideos from "./popular-videos";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex: "0 0 3.125rem",
			justifyContent : "center",
			backgroundColor:(value)=> value?(theme.palette.type==="light")?"#F2F6F9":"#19191A":"",
			margin:theme.spacing(2,0),
		},
		container : {
			display:"flex",
			flex: "1 1 100%",
			margin: theme.spacing(1,0),
			[theme.breakpoints.up("lg")]: {
				display:"flex",
				flex: `0 0 ${theme.breakpoints.values.lg}px`,
			},
		}
	});
});

const Tutorials = ({dark}) => {
	const classes = useStyles(dark);
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<div>
					<div>
						<Title title={"Tutorials"} dark={false}/>
					</div>
					<div>
						<LatestVideos />
						<PopularVideos />
						This is Tutorials
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tutorials;