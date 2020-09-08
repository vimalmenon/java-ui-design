import {SET_SELECTED_NAVIGATION, SET_GROUPS, SET_NAVIGATION_ENTITLEMENT, SET_SOCIAL_MEDIAS, ADD_PROMISE, SET_SNACKBAR} from "./common-types";

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
const setSocialMedias = (socialMedias) => {
	return {
		type : SET_SOCIAL_MEDIAS,
		socialMedias
	};
};
const addPromise = (promise) => {
	return {
		type : ADD_PROMISE,
		promise
	};
};
const showSnackbar = (snackMessage) => {
	return {
		type : SET_SNACKBAR,
		snackBar:true, 
		snackMessage
	};
};
const closeSnackbar = () => {
	return {
		type : SET_SNACKBAR,
		snackBar:false, 
		snackMessage:null
	};
};
export default {
	setGroups,
	addPromise,
	setSocialMedias,
	showSnackbar,
	closeSnackbar,
	setSelectedNavigation,
	setNavigationEntitlement
};