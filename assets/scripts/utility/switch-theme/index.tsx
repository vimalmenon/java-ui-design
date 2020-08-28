import {dispatch} from "utility";
import {storage} from "const";

import actions from "actions";

const paletteName = "palette";

const switchTheme  = (palette) => {
	storage.selectStorage("local").addToStorage({[paletteName]:palette});
	dispatch(actions.preferences.setPalette(palette));
};
const themeInit = () => {
	const localStorage =  storage.selectStorage("local").getStorage();
	if (localStorage[paletteName]) {
		dispatch(actions.preferences.setPalette(localStorage[paletteName]));
	}
};
export default {
	themeInit,
	switchTheme
};