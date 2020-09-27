import {storage} from "../storage";

const headers = {
	"Content-Type": "application/json",
};

const init = () => {
	const value = storage.selectStorage("session").getStorage();
	if(value["Authorization"]) {
		headers["Authorization"] = value["Authorization"];
	}
};
const setAuthorization = (value) => {
	headers["Authorization"] = value;
};
const getHeaders = () => {
	return headers;
};

init();
export default {
	setAuthorization,
	getHeaders
};
export {
	setAuthorization,
	getHeaders
};