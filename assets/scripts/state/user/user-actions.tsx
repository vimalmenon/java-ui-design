import {SET_SESSION} from "./user-types";

const setSession = (session) => {
	return (dispatch) => {
		dispatch({
			type : SET_SESSION,
			session
		});
	};
};
export default {
	setSession
};