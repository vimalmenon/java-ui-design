import {dispatch} from "utility";
import {storage} from "const";

const switchTheme  = () => {
};
const themeInit = () => {
	const localStorage =  storage.selectStorage("local").getStorage();
	if (localStorage["preferences"]) {
		console.log("this is called", dispatch, localStorage);
	}
};
export default {
	themeInit,
	switchTheme
};