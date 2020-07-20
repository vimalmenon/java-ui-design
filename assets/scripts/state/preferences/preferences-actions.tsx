import {TOGGLE_DRAWER, TOGGLE_MODE, SET_PALETTE, SET_PALETTE_COLOR, SET_PREFERENCES} from "./preferences-types";

const toggleMode = (mode: any) => {
	return (dispatch) => {
		dispatch({
			type : TOGGLE_MODE,
			mode : (mode === "dark") ? "light": "dark" 
		});
	};
};
const toggleDrawer = (drawer: boolean) => {
	return {
		type : TOGGLE_DRAWER,
		drawer : !drawer 
	};
};

const setPaletteColor = (props: any) => {
	return {
		type : SET_PALETTE_COLOR,
		...props 
	};
};
const setPalette = (props: any) => {
	return {
		type : SET_PALETTE,
		palette : props
	};
};

const setPreferences = (preferences) => {
	return {
		type: SET_PREFERENCES,
		preferences
	};
};
export default {
	setPaletteColor,
	toggleDrawer,
	toggleMode,
	setPreferences,
	setPalette
};