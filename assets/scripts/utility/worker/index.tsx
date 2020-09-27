import * as CoreWorker from "../../worker/core.worker";

const worker = new (CoreWorker as any)();
const callbacks = {};

worker.onmessage = (event: any) => {
	const {data} = event;
	callbacks[data.id].onSuccess(data.value);
};

const processJob = (message) => {
	const {callbacks, ...rest} = message;
	callbacks[message.id]= message;
	worker.postMessage(rest);
};

export default {
	processJob
};