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
import {Link} from "react-scroll";

import image1 from "../../../../images/image1.jpg";
import image2 from "../../../../images/image5.jpg";
import image3 from "../../../../images/image3.jpg";




const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root:{
			display: "flex"
		},
		carousel:{
			display: "flex",
			flexDirection:"column",
			flex:"1 1 100%"
		},
		cardContent:{
			width:"100%",
			display:"flex"
		},
		cardMedia:{
			height:"906px",
			width:"100%",
			display:"flex",
			justifyContent : "center",
		},
		container : {
			display:"flex",
			flex:"1 1 100%",
			color:"white",
			[theme.breakpoints.up("lg")]: {
				display:"flex",
				flex: `0 0 ${theme.breakpoints.values.lg}px`,
			},
		}
	});
});
const carousels = [
	{
		id: 1,
		name: "About Me",
		image: image1,
		imageTitle:"About Me",
		title:"My name is Vimal Menon",
		description:"My name is Vimal Menon, I am a fullstack web developer",
		buttonLable: "About Me",
		buttonLink:"about-me",
		contentPosition: "left",
	},
	{
		id: 2,
		name: "Tutorials",
		image: image2,
		imageTitle:"Tutorials",
		title:"",
		description:"",
		buttonLable: "Tutorials",
		buttonLink:"tutorials",
		contentPosition: "middle",
	},
	{
		id: 3,
		name: "Contact Us",
		image: image3,
		imageTitle:"Contact Us",
		title:"",
		description:"",
		buttonLable: "Contact Us",
		buttonLink:"contact-us",
		contentPosition: "right",
	}
];

function Banner(props) {
	const {item, classes} = props;
	const media = (
		<Grid item xs={12} className={classes.cardContent}>
			<CardMedia
				className={classes.cardMedia}
				image={item.image}
				title={item.imageTitle}>
				<div className={classes.container}>
					<Grid item xs={12}>
						<CardContent className="Content">
							<Typography className="Title">
								{item.title}
							</Typography>
							<Typography className="Caption">
								{item.description}
							</Typography>
							<Link to={item.buttonLink} spy={true} smooth={true} offset={50} duration={500}>
								<Button variant="contained" color="secondary">
									{item.buttonLable}
								</Button>
							</Link>
						</CardContent>
					</Grid>
				</div>
			</CardMedia>
		</Grid>
	);
	return (
		<Card raised>
			<Grid container spacing={0}>
				{media}
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
				animation={"slide"}
				indicators={true}
				timeout={500}
				navButtonsAlwaysVisible={true}>
				{carousels.map((item, index) => {
					return (
						<Banner 
							item={item} 
							key={index} 
							contentPosition={item.contentPosition} 
							classes={classes}/>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Hero;