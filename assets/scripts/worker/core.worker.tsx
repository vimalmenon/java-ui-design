import process from "./process";

const ctx: Worker = self as any;


ctx.addEventListener("message", (event) => {
	const {data} = event;
	const value = process[data.name].call(ctx, data.data);
	ctx.postMessage({ ...data, value });
});


export default Worker;