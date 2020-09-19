declare var VERSION:string;

import {DeviceUUID} from "device-uuid";

import apiList from "./api-list";
import colors from "./color";
import {navigations, urlMapper, navigationByName, mainNavigations, extraNavigations} from "./navigations";
import {MainNavigation, MainUrlMapper} from "./navigations/main";
import methods from "./methods";
import icons from "./icons";
import headers from "./headers";
import {storage} from "./storage";
import * as workerDetails from "./worker-details";

const drawerWidth = 240;
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
	mainNavigations,
	extraNavigations,
	MainNavigation,
	MainUrlMapper,
	deviceId,
	headers,
	storage,
	icons,
	workerDetails
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
	mainNavigations,
	extraNavigations,
	MainNavigation,
	MainUrlMapper,
	deviceId,
	headers,
	storage,
	icons,
	workerDetails
};

export default constants;