import worker from "./worker";
import {rgbToNumbers, replaceUrlBackslashAtEnd} from "./others";
import spinner from "./spinner";
import ApiCaller from "./api";
import localization from "./localization";
import {dispatch} from "./dispatch";
import notification from "./notification";
import used from "./used";
import switchTheme from "./switch-theme";

export default {
	used,
	ApiCaller,
	worker,
	spinner,
	rgbToNumbers,
	localization,
	notification,
	dispatch,
	replaceUrlBackslashAtEnd,
	switchTheme
};

export {
	used,
	ApiCaller,
	worker,
	spinner,
	rgbToNumbers,
	localization,
	notification,
	dispatch,
	replaceUrlBackslashAtEnd,
	switchTheme
};