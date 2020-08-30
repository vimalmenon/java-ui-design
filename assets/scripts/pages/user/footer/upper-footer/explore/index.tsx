import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import {
	Link
} from "react-router-dom";

import {extraNavigations, icons} from "const";
import {Title} from "../../../common";
const {ArrowForward} =  icons;


const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex:"1 1 50%",
			flexDirection:"column"
		},
		title : {
			display: "flex",
		},
		container :{
			display: "flex",
		},
		linkItem : {
			display:"flex",
			flex: "1 1 50%",
		},
		link : {
			color:"white",
			textDecoration:"none",
			"&:hover": {
				color:"white"
			}
		},
		icon: {
			fontSize:"0.6rem"
		}
	});
});
const Explore = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.title}>
				<Title title={"Explore"} />
			</div>
			<div className={classes.container}>
				{extraNavigations.map((navigation, key) => {
					const {name, link} = navigation;
					return (
						<div key={key} className={classes.linkItem}>
							<Link to={link} className={classes.link}>
								<ArrowForward className={classes.icon}/> {name}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Explore;