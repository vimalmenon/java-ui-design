import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {
	CardContent,
	Typography,
	Button
} from "@material-ui/core";
import {Link} from "react-scroll";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		container : {
			display:"flex",
			flex:"1 1 100%",
			color:"#FFFFFF",
			[theme.breakpoints.up("lg")]: {
				display:"flex",
				flex: `0 0 ${theme.breakpoints.values.lg}px`,
			},
		},
		content : {
			display:"flex",
			flexDirection:"column",
			flex:"1 1 100%",
			justifyContent:"space-around"
		},
		title: {
			fontSize:"2rem"
		},
		description:{

		}
	});
});

const CardDetail = ({item}) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<CardContent className={classes.content}>
				<Typography className={classes.title}>
					{item.title}
				</Typography>
				<Typography className={classes.description} component="div">
					<div>
						{item.description}
					</div>
				</Typography>
				<Link to={item.buttonLink} spy={true} smooth={true} offset={50} duration={500}>
					<Button variant="contained" color="secondary">
						{item.buttonLable}
					</Button>
				</Link>
			</CardContent>
		</div>
	);
};

export default CardDetail;