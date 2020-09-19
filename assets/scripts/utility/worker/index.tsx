import * as CoreWorker from "../../worker/core.worker";

const worker = new (CoreWorker as any)();
const callback = {};

worker.onmessage = (event:any) => {
	const {data} = event;
	callback[data.id].onSuccess(data.value);
};

const processJob = (message) => {
	callback[message.id]= message;
	worker.postMessage(message);
};

export default {
	processJob
};