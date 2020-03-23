import * as React from "react";
import {
	Theme,
	makeStyles,
	createStyles,
} from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { hexToRgb } from "@material-ui/core/styles";
import {rgbToNumbers} from "../utility";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			height: 180,
		},
		colorPicker : {
			width: "130px",
			margin: "10px 0",
			height: "2.8em",  
			textAlign: "center",
		}
	});
});

export default function CustomColorPicker (props: any) {
	const classes = useStyles();
	const {hexColor, onApply, onCancel, theme} = props;                              
	const [r, g, b] = hexColor.startsWith("#") ? rgbToNumbers(hexToRgb(hexColor)) : rgbToNumbers(hexColor);
	const [text, setText] = React.useState("black");
	const [red, setRed] = React.useState(parseInt(r));
	const [green, setGreen] = React.useState(parseInt(g));
	const [blue, setBlue] = React.useState(parseInt(b));
	let onChange = (setState:any, value: number | number[]) => {
		setState(value);
	};
	return (
		<div>
			<div className={classes.root}>
				<Slider
					min={0}
					max={255}
					orientation="vertical"
					value={red}
					color={theme}
					onChange={(event, value) => onChange(setRed, value)}
					aria-labelledby="vertical-slider"/>
				<Slider
					min={0}
					max={255}
					orientation="vertical"
					value={green}
					color={theme}
					onChange={(event, value) => onChange(setGreen, value)}
					aria-labelledby="vertical-slider"/>
				<Slider
					min={0}
					max={255}
					orientation="vertical"
					value={blue}
					color={theme}
					onChange={(event, value) => onChange(setBlue, value)}
					aria-labelledby="vertical-slider"/>
			</div>
			<div style={{"background": `rgb(${red} ${green} ${blue})`, color: text}} className={classes.colorPicker} onClick={() => setText(((text === "black") ? "white": "black"))}>
				<span style={{"lineHeight": "50px"}}>T</span>
			</div>
			<Button variant="contained" color={theme} onClick={() =>onApply(`rgb(${red}, ${green}, ${blue})`, text)}>
				<CheckIcon />
			</Button>
			<Button variant="contained" color="secondary" onClick={() =>onCancel()}>
				<ClearIcon />
			</Button>
		</div>
	);
}