import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root:{
			display: "flex",
			flex: "1 1 100%",
		},
		item : {
			display: "flex",
			flexDirection:"column",
			margin: theme.spacing(0, 1)
		}
	});
});

const LatestVideos = ({tutorials}) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{tutorials.map((tutorial, key) => {
				return (
					<div key={key} className={classes.item}>
						<div>
							<iframe width={"100%"} src={`//www.youtube.com/embed/${tutorial.youtubeId}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0`} frameBorder="0" allowFullScreen={true} />
						</div>
						<div>
							{tutorial.name}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default LatestVideos;