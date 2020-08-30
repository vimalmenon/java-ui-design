import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {extraNavigations} from "const";
import {Title} from "../../../common";


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
			flex: "1 1 50%"
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
					const {name} = navigation;
					console.log(name);
					return (
						<div key={key} className={classes.linkItem}>
							{name}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Explore;