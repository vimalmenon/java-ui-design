/* exported worker */

import * as CoreWorker from "../../worker/core.worker";

const worker = new (CoreWorker as any)();


worker.postMessage({ a: 1 });
//worker.onmessage = (event:any) => {console.log(event)};

const processJob = () => () => {
};

export default {
	processJob
};