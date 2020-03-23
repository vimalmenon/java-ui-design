import * as React from "react";
import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import clsx from "clsx";
import {
	red, 
	pink, 
	purple, 
	deepPurple, 
	indigo, 
	blue, 
	lightBlue, 
	cyan, 
	teal, 
	green, 
	lightGreen, 
	lime, 
	yellow, 
	amber, 
	orange, 
	deepOrange, 
	brown, 
	grey, 
	blueGrey
} from "@material-ui/core/colors";
import SettingsIcon from "@material-ui/icons/Settings";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import CustomColorPicker from "./custom-color-picker";


const colorList = [
	{...red, colorName : "Red", textColor: "white"},
	{...pink, colorName: "Pink", textColor: "white"}, 
	{...purple, colorName : "Purple", textColor: "white"}, 
	{...deepPurple, colorName : "Deep Purple", textColor: "white"},
	{...indigo, colorName : "Indigo", textColor: "white"},
	{...blue, colorName: "Blue", textColor: "white"}, 
	{...lightBlue, colorName: "Light Blue", textColor: "black"},
	{...cyan, colorName: "Cyan", textColor: "black"}, 
	{...teal, colorName: "Teal", textColor: "white"},
	{...green, colorName : "Green", textColor: "black"}, 
	{...lightGreen, colorName : "Light Green", textColor: "white"},
	{...lime, colorName : "Lime", textColor: "black"},
	{...yellow, colorName : "Yellow", textColor: "black"}, 
	{...amber, colorName : "Amber", textColor: "black"}, 
	{...orange, colorName: "Orange", textColor: "black"},
	{...deepOrange, colorName : "Deep Orange", textColor: "white"},
	{...brown, colorName: "Brown", textColor: "white"},
	{...grey, colorName: "Grey", textColor: "black"}, 
	{...blueGrey, colorName : "Blue Grey", textColor: "white"},
	{type: "customColor", colorName: "custom", textColor: "white"}
];

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root : {
			display: "flex",
			justifyContent: "center"
		},
		flex: {
			flex : 1
		},
		colorBox : {
			flexDirection: "column"
		},
		color: {
			display: "inline-block",
			height: "3.1em",
			width : "3.1rem",
			margin: "0.2em",
			background: "white",
			lineHeight: "3.1em",
			textAlign: "center"
		},
		selectedColor : {
			border: `2px solid ${theme.palette.text.primary}`
		},
		span : {
			marginTop: "5px",
			height: "5px"
		},
		icon : {
			color:"black",
		}
	});
});
export default function ColorPicker (props: any) {
	const classes = useStyles();
	const {color, onColorChange, code, theme} = props;
	const checkCode = (value: any) => {
		return value[code];
	};
	const [customize, setCustomize] = React.useState(false);
	const [selectedColor, setSelectedColor] = React.useState(color);
	return (
		<div className={classes.root}>
			{!customize ?
				<div className={classes.colorBox}>
					{colorList.map((color, key) => {
						const {textColor, colorName, ...rest} = color;
						if (color.type !== "customColor") {
							return (
								<Tooltip title={colorName} arrow key={key}>
									<div
										className={clsx(classes.color, {
											[classes.selectedColor]: (color && checkCode(color) === selectedColor["main"])})} 
										style={{background: checkCode(color)}}
										onClick={() => setSelectedColor({...rest, main: checkCode(rest)})} >
										<span style={{color: textColor}}>T</span>
									</div>
								</Tooltip>
							);
						} else {
							return (
								<Tooltip title={"Custom Color"} arrow key={key}>
									<div
										key={key} 
										className={clsx(classes.color, {
											[classes.selectedColor]: false})}
										onClick={() => setCustomize(true)}
										style={{background: selectedColor["main"], color: color["contrastText"]}}>
										<span className={classes.span}><SettingsIcon className={classes.icon} style={{color: color["contrastText"]}}/></span>
									</div>
								</Tooltip>
							);
						}
					})}
					<div>
						<Button variant="contained" color={theme} onClick={() =>onColorChange(selectedColor)} style={{width: "100%"}}>
							Apply
						</Button>
					</div>
				</div>
				:
				<CustomColorPicker 
					theme={theme}
					hexColor={selectedColor["main"]}
					onCancel={() => setCustomize(false)}
					onApply={(background:string, color:string) =>{setSelectedColor({"main": background}); setCustomize(false);}} />
			}
		</div>
	);
}