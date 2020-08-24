import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Grid,
	Button
} from "@material-ui/core";

import image1 from "../../../../images/image1.jpg";
import image2 from "../../../../images/image2.jpg";
import image3 from "../../../../images/image3.jpg";
import image4 from "../../../../images/image4.jpg";


const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex"
		},
		carousel: {
			display: "flex",
			flexDirection:"column",
			flex:"1 1 100%"
		}
	});
});
const carousels = [
	{
		id: 1,
		Name: "Electronics",
		Caption: "Electrify your friends!",
		contentPosition: "left",
		image: image1,
	},
	{
		id: 2,
		Name: "Home Appliances",
		Caption: "Say no to manual home labour!",
		contentPosition: "middle",
		image: image2,
	},
	{
		id: 3,
		Name: "Decoratives",
		Caption: "Give style and color to your living room!",
		contentPosition: "right",
		image: image3,
	},
	{
		id: 4,
		Name: "Decoratives",
		Caption: "Give style and color to your living room!",
		contentPosition: "right",
		image: image4,
	}
];

function Banner(props) {
	let items:any = [];
	const item = props.item;
	const media = (
		<Grid item xs={12} key={props.item.id}>
			<CardMedia
				style={{height:"764px"}}
				image={item.image}
				title={props.item.Name}>
				<Typography className="MediaCaption">
					{item.Name}
				</Typography>
				<Grid item xs={12}>
					<CardContent className="Content">
						<Typography className="Title">
							{props.item.Name}
						</Typography>
						<Typography className="Caption">
							{props.item.Caption}
						</Typography>
						<Button variant="outlined" className="ViewButton">
							View Now
						</Button>
					</CardContent>
				</Grid>
			</CardMedia>
		</Grid>
	);

	items.push(media);
	return (
		<Card raised className="Banner">
			<Grid container spacing={0} className="BannerGrid">
				{items}
			</Grid>
		</Card>
	);
}
const Hero = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Carousel
				className={classes.carousel}
				autoPlay={false}
				timer={5000}
				animation={"slide"}
				indicators={true}
				timeout={500}
				navButtonsAlwaysVisible={true}>
				{carousels.map((item, index) => {
					return (<Banner item={item} key={index} contentPosition={item.contentPosition}/>);
				})}
			</Carousel>
		</div>
	);
};

export default Hero;