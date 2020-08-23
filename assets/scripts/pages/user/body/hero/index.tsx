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

import image1 from "../../../images/image1.jpg";
import image2 from "../../../images/image2.jpg";
import image3 from "../../../images/image3.jpg";
import image4 from "../../../images/image4.jpg";


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
const items = [
	{
		Name: "Electronics",
		Caption: "Electrify your friends!",
		contentPosition: "left",
		Items: [
			{
				Name: "Macbook Pro",
				Image: image1
			}
		]
	},
	{
		Name: "Home Appliances",
		Caption: "Say no to manual home labour!",
		contentPosition: "middle",
		Items: [
			{
				Name: "Washing Machine WX9102",
				Image: image2
			}
		]
	},
	{
		Name: "Decoratives",
		Caption: "Give style and color to your living room!",
		contentPosition: "right",
		Items: [
			{
				Name: "Living Room Lamp",
				Image: image3
			}
		]
	},
	{
		Name: "Decoratives",
		Caption: "Give style and color to your living room!",
		contentPosition: "right",
		Items: [
			{
				Name: "Living Room Lamp",
				Image: image4
			}
		]
	}
];

function Banner(props) {
	if (props.newProp) console.log(props.newProp);
	const totalItems = props.length ? props.length : 3;
	const mediaLength = totalItems - 1;

	let items:any = [];
	for (let i = 0; i < mediaLength; i++) {
		const item = props.item.Items[i];
		if(item) {
			const media = (
				<Grid item xs={12} key={item.Name}>
					<CardMedia
						style={{height:"764px"}}
						image={item.Image}
						title={item.Name}>
						<Typography className="MediaCaption">
							{item.Name}
						</Typography>
						<Grid item xs={12} key="content">
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
		}
	}

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
				animation={"fade"}
				indicators={true}
				timeout={500}
				navButtonsAlwaysVisible={true}>
				{items.map((item, index) => {
					return (<Banner item={item} key={index} contentPosition={item.contentPosition}/>);
				})}
			</Carousel>
		</div>
	);
};

export default Hero;