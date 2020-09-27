class Worker {
	public static number;
	public id: number;
	public name: string;
	public data: any;
	private callback: any;
	constructor (name: string, data: any) {
		Worker.number++;
		this.id = Worker.number;
		this.name = name;
		this.data = data;
	}
	onCallback (callback) {
		this.callback = callback;
		return this;
	}
	onSuccess(data) {
		if (this.callback){
			this.callback(data);
		} else {
			console.log(data);
		}
	}
	onFailure(data) {
		console.log(data);
	}
}

Worker.number=0;
class RandomProcessWorker extends Worker {
	constructor(data: any) {
		super("randomProcess", data);
	}
}

export {
	Worker,
	RandomProcessWorker
};