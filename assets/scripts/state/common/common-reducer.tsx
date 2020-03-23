import {SET_SELECTED_NAVIGATION, SET_GROUPS, SET_NAVIGATION_ENTITLEMENT} from "./common-types";

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
	default: 
		return oldState;
	}
}