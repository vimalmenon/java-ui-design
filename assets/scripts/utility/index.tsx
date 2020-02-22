import worker from "./worker";
import {rgbToNumbers, replaceUrlBackslashAtEnd} from "./others";
import spinner from "./spinner";
import ApiCaller from "./api";
import localization from "./localization";
import {dispatch} from "./dispatch";

export default {
    ApiCaller,
    worker,
    spinner,
    rgbToNumbers,
    localization,
    dispatch,
    replaceUrlBackslashAtEnd
};

export {
    ApiCaller,
    worker,
    spinner,
    rgbToNumbers,
    localization,
    dispatch,
    replaceUrlBackslashAtEnd
};