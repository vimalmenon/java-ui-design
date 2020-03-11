import apiList from "./api-list";
import colors from "./color";
import {navigations, urlMapper, navigationByName} from "./navigations";

import {MainNavigation, MainUrlMapper} from "./navigations/main";

import urlList from "./url-list";

import methods from "./methods";


const drawerWidth = 240 ;

const version = "0.0.0";

const constants = {
  urlList,
  methods,
  drawerWidth,
  version,
  colors,
  apiList,
  navigations,
  urlMapper,
  navigationByName,
  MainNavigation,
  MainUrlMapper
};


export {
  urlList,
  methods,
  drawerWidth, 
  colors, 
  version, 
  apiList,
  navigations,
  urlMapper,
  navigationByName,
  MainNavigation,
  MainUrlMapper
};

export default constants;