import {switchTheme, ApiCaller} from "utility";
import {apiList} from "const";

const {MainApi} = apiList;

const init = (actions) => {
	switchTheme.themeInit();
	actions.addPromise(new ApiCaller(new MainApi()).success((data) => {
		actions.setSocialMedias(data.socialMedias);
		return data;
	}));
};

export {
	init
};