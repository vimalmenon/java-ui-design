import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex:"1 1 50%"
		},
		iframe:{
			height:"320px",
			width:"90%",
		}
	});
});

const Video = ({aboutMe}) => {
	const classes = useStyles();
	return(
		<div className={classes.root}>
			<iframe className={classes.iframe} width={"100%"} src={`//www.youtube.com/embed/${aboutMe.videoLink}`} frameBorder="0" allowFullScreen={true} />
		</div>
	);
};

export default Video;