declare var localStorage:any;
declare var sessionStorage:any;

const storageValue = "VimalMenon";
class Storage {
	storage: any;
	constructor(){
		const local = localStorage.getItem(storageValue) || JSON.stringify({});
		const session = sessionStorage.getItem(storageValue) || JSON.stringify({});
		localStorage.setItem(storageValue,local);
		sessionStorage.setItem(storageValue,session);
		this.storage = sessionStorage;
	}
	public selectStorage (storageType:"session"|"local") {
		if(storageType === "session") {
			this.storage = sessionStorage;
		} else {
			this.storage = localStorage;
		}
		return this;
	}
	public getStorage () {
		return JSON.parse(this.storage.getItem(storageValue));
	}
	public addToStorage (value) {
		var storage = this.getStorage();
		this.storage.setItem(storageValue, JSON.stringify({...storage, ...value}));
	}
}

const storage = new Storage();

export default {
	storage
};
export {
	storage
};