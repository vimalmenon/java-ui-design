import {SET_SELECTED_NAVIGATION, SET_GROUPS, SET_NAVIGATION_ENTITLEMENT, SET_SOCIAL_MEDIAS, ADD_PROMISE, SET_SNACKBAR} from "./common-types";

export default function (oldState:any, action : any) {
	let state;
	switch (action.type) {
	case SET_SELECTED_NAVIGATION:
		state = {...oldState};
		state.selectedNavigation = action.selectedNavigation;
		return state;
	case SET_GROUPS:
		state = {...oldState};
		state.groups = action.groups;
		return state;
	case SET_NAVIGATION_ENTITLEMENT:
		state = {...oldState};
		state.navigationEntitlement = action.navigationEntitlement;
		return state;
	case SET_SOCIAL_MEDIAS:
		state = {...oldState};
		state.socialMedias = [...action.socialMedias];
		return state;
	case ADD_PROMISE:
		state = {...oldState};
		state.promises = [...state.promises, action.promise];
		return state;
	case SET_SNACKBAR:
		state = {...oldState};
		state.snackBar = action.snackBar;
		state.snackMessage = action.snackMessage;
		return state;
	default: 
		return oldState;
	}
}