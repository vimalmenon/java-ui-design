import worker from "./worker";
import {rgbToNumbers, replaceUrlBackslashAtEnd} from "./others";
import spinner from "./spinner";
import ApiCaller from "./api";
import localization from "./localization";
import {dispatch} from "./dispatch";
import notification from "./notification";

export default {
    ApiCaller,
    worker,
    spinner,
    rgbToNumbers,
    localization,
    notification,
    dispatch,
    replaceUrlBackslashAtEnd
};

export {
    ApiCaller,
    worker,
    spinner,
    rgbToNumbers,
    localization,
    notification,
    dispatch,
    replaceUrlBackslashAtEnd
};