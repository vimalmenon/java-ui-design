import {storageValue} from "const";
declare var localStorage:any;
declare var sessionStorage:any;

class Storage {
	storage: any;
	constructor(){
		localStorage.setItem(storageValue, JSON.stringify({}));
		sessionStorage.setItem(storageValue, JSON.stringify({}));
		this.storage = sessionStorage;
	}
	public selectStorage (storageType:String) {
		if(storageType === "session") {
			this.storage = sessionStorage;
		} else {
			this.storage = localStorage;
		}
	}
	public getStorage () {
	}
	public addToStorage () {
	}
}

export default {
	storage: new Storage()
};