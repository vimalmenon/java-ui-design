import * as CoreWorker from "../../worker/core.worker";

const worker = new (CoreWorker as any)();


worker.onmessage = (event:any) => {console.log(event);};

const processJob = (message) => {
	worker.postMessage(message);
};

export default {
	processJob
};