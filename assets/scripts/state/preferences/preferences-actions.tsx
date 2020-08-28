import {TOGGLE_DRAWER, SET_PALETTE, SET_PALETTE_COLOR, SET_PREFERENCES, SET_LOADING} from "./preferences-types";

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
const setLoading = (loading:boolean) => {
	return {
		type:SET_LOADING,
		loading
	};
};
export default {
	setPaletteColor,
	toggleDrawer,
	setPreferences,
	setPalette,
	setLoading
};