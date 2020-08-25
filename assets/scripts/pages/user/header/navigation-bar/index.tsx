import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import Logo from "./logo";
import Toolbar from "./toolbar";
import Search from "./search";
import Navigation from "./navigation";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex: "0 0 63px",
			justifyContent : "center",
			backgroundColor:(theme.palette.type==="light")?theme.palette.background.paper:"#121212"
		},
		container : {
			display:"flex",
			flex: "1 1 100%",
			alignItems : "center",
			margin: theme.spacing(1,0),
			[theme.breakpoints.up("lg")]: {
				display:"flex",
				flex: `0 0 ${theme.breakpoints.values.lg}px`,
			},
		},
		navigation : {
			display: "flex",
			justifyContent :"flex-end",
			flex: "1 1 auto"
		}
	});
});


const NavigationBar = ()=> {
	const classes = useStyles();
	const [search, setSearch] = React.useState(false);
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<Logo />
				<div className={classes.navigation}>
					<Navigation />
					<Toolbar 
						search={search}
						setSearch={setSearch}/>
				</div>
			</div>
			<Search 
				search={search}
				setSearch={setSearch}/>
		</div>
	);
};

export default NavigationBar;