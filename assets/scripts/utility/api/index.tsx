import {apiList, methods} from "const";
import {startSpinner, stopSpinner} from "../spinner";

import * as actions from "actions";
import {dispatch} from "utility";


const {GET, PUT, POST, DELETE} = methods;

const controller = new AbortController()
const signal = controller.signal

const headers = {
	'Content-Type': 'application/json',
};

class ApiCaller {

	private controller;
	private signal;
	private promise;
	private isSpinning;

	constructor (data: IApi, isNotFormatted?: boolean) {
		this.controller = new AbortController();
		this.signal = this.controller.signal;
		this.promise = new Promise((resolve, reject) => {
			this.isSpinning = true;
			startSpinner();
			let promise;
			if (data.method === GET) {
				promise = fetch(data.url, {method: data.method, signal: this.signal, headers })
			} else {
				promise = fetch(data.url, {method: data.method, signal: this.signal, body: data.data, headers })
			}
			promise = promise.then((data) => {
				stopSpinner();
				this.isSpinning = false;
				if (data.headers.get("content-type") === "application/json") {
					return data.json();
				} else {
					return data.text();
				}
			});
			promise.then((data) => {
				if (isNotFormatted) {
					resolve(data);
					return;
				} else {
					if (data.session) {
						dispatch(actions.user.setSession(data.session));
					}
					if (data.code === 0) {
						resolve(data.data);
					} else {
						reject(data)
					}
				}
			});
		});	
	}
	public success(successCallback) {
		this.promise = this.promise.then(successCallback);
		return this;
	}
	public failure (failureCallback) {
		this.promise = this.promise.then(failureCallback);
		return this;
	}
	public abort () {
		if (this.isSpinning){
			stopSpinner();	
		}
		this.controller.abort();
	}
}

export default ApiCaller;