import * as React from "react";
import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import {Title, Container} from "../../../common";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection:"column"
		}
	});
});

const Projects = ({dark}) => {
	const classes = useStyles();
	return (
		<Container dark={dark} className="projects">
			<div className={classes.root}>
				<div>
					<Title title={"Projects"} dark={false}/>
				</div>
				<div>
					This is Projects
				</div>
			</div>
		</Container>
	);
};

export default Projects;