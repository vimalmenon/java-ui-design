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
		}
	});
});

const navigations = [
	{
		name:"Home",
		link:"/"
	},
	{
		name: "About Me",
		link:"/about-me"
	},
	{
		name:"Tutorials",
		link:"/tutorials"
	},
	{
		name:"Contact",
		link:"/contact-us"
	}
];
const Navigation = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{navigations.map((navigation, key) => {
				return (
					<span key={key}>
						{navigation.name}
					</span>
				);
			})}
		</div>
	);
};

export default Navigation;