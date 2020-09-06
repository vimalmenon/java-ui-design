import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {Element} from "react-scroll";

import {Title, Container} from "../../../common";
import LatestVideos from "./latest-videos";
//import PopularVideos from "./popular-videos";

import {ApiCaller} from "utility";
import {apiList} from "const";

const {GetTutorials} = apiList;

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		element: {
			display: "flex",
			flexDirection:"column",
		},
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
	const [tutorials, setTutorials] = React.useState<any>(null);
	React.useEffect(() => {
		new ApiCaller(new GetTutorials())
			.success((data) => {
				setTutorials(data);
			});
	},[]);
	return (
		<Element name="tutorials" className={classes.element}>
			<Container dark={dark}>		
				<div className={classes.root}>
					<div className={classes.title}>
						<Title title={"Tutorials"} dark={false}/>
					</div>
					{tutorials ? 
						<div className={classes.content}>
							<LatestVideos tutorials={tutorials}/>
							{/*<PopularVideos />*/}
						</div>
						: null
					}
				</div>
			</Container>
		</Element>
	);
};

export default Tutorials;