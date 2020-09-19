class Worker {
	public static number;
	public id:number;
	public name:string;
	public data:any;
	constructor (name:string, data:any) {
		Worker.number++;
		this.id = Worker.number;
		this.name = name;
		this.data = data;
	}
	onCallback () {

	}
}

Worker.number=0;
class RandomProcessWorker extends Worker {
	constructor(data:any) {
		super("randomProcess", data);
	}
}

export {
	RandomProcessWorker
};