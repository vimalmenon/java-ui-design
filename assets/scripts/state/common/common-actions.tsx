import {SET_SELECTED_NAVIGATION, SET_GROUPS, SET_NAVIGATION_ENTITLEMENT} from "./common-types";

import {navigationByName} from "const";

const {admin} = navigationByName;

const setSelectedNavigation = (selectedNavigation: any) => {
	return {
		type : SET_SELECTED_NAVIGATION,
		selectedNavigation
	};
};
const setGroups = (groups) => {
	return {
		type : SET_GROUPS,
		groups
	};
};
const setNavigationEntitlement = (navigationList) => {
	const navigationEntitlement = {};
	navigationList.map((navigation: any) => {
		navigationEntitlement[navigation.name] = navigation.access;
		if (navigation.name === admin.name) {
			admin["access"] = navigation.access;
		}
	});
	return {
		type : SET_NAVIGATION_ENTITLEMENT,
		navigationEntitlement
	};
};
export default {
	setSelectedNavigation,
	setNavigationEntitlement,
	setGroups
};