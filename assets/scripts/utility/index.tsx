import worker from "./worker";
import {rgbToNumbers, replaceUrlBackslashAtEnd} from "./others";
import spinner from "./spinner";
import ApiCaller from "./api";
import {dispatch} from "./dispatch";
import notification from "./notification";
import switchTheme from "./switch-theme";

export default {
	ApiCaller,
	worker,
	spinner,
	rgbToNumbers,
	notification,
	dispatch,
	replaceUrlBackslashAtEnd,
	switchTheme
};

export {
	ApiCaller,
	worker,
	spinner,
	rgbToNumbers,
	notification,
	dispatch,
	replaceUrlBackslashAtEnd,
	switchTheme
};