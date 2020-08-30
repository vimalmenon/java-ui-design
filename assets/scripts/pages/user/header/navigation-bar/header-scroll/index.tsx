import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {scrollSpy} from "react-scroll";

import Logo from "../logo";
import Navigation from "../navigation";
import Toolbar from "../toolbar";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root:{
			display: "flex",
			flex: "0 0 63px",
			justifyContent : "center",
			position:"fixed",
			top:"0px",
			width:"100%",
			overflow:"hidden",
			zIndex:1000,
			height:(value) =>`${value}px`,
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
const HeaderScroll = () => {
	const [pos, setPos] = React.useState(0);
	React.useEffect(() => {
		scrollSpy.addSpyHandler((x, y) => {
			setPos(y);
		}, document);
	},[]);
	const classes = useStyles((pos>970)?(pos-970>63)?63:pos-970:0);
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<Logo/>
				<div className={classes.navigation}>
					<Navigation />
					<Toolbar 
						search={false}
						setSearch={() =>{}}
						showSearch={false} />
				</div>
				
			</div>
		</div>
	);
};

export default HeaderScroll;