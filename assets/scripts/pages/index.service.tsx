import {switchTheme, ApiCaller} from "utility";
import {apiList} from "const";

const {MainApi} = apiList;

const init = () => {
	switchTheme.themeInit();
	new ApiCaller(new MainApi)
		.success((data) => {
			console.log(data.socialMedias);
		});
};

export {
	init
};