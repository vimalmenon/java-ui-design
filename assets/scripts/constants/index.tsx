declare var VERSION:string;

import {DeviceUUID} from "device-uuid";

import apiList from "./api-list";
import colors from "./color";
import {navigations, urlMapper, navigationByName} from "./navigations";
import {MainNavigation, MainUrlMapper} from "./navigations/main";
import methods from "./methods";
import icons from "./icons";

const drawerWidth = 240;
const storageValue = "VimalMenon";
const version = VERSION;
const deviceId = new DeviceUUID().get();

const constants = {
	methods,
	drawerWidth,
	version,
	colors,
	apiList,
	navigations,
	urlMapper,
	navigationByName,
	MainNavigation,
	MainUrlMapper,
	storageValue,
	deviceId,
	icons
};


export {
	methods,
	drawerWidth, 
	colors, 
	version, 
	apiList,
	navigations,
	urlMapper,
	navigationByName,
	MainNavigation,
	MainUrlMapper,
	storageValue,
	deviceId,
	icons
};

export default constants;