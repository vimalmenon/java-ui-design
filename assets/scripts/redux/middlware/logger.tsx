/* exported props */


const logger = (props : any) => (next: any) => (action: any) => {
	//log("Before : ", getState());
	//log("Dispatch : ", action);
	let returnedValue = next(action);
	//console.log("After : ", props.getState());
	//log("--------------------------------------------------------------");
	return returnedValue;
};

export default logger;