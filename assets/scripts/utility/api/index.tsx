import {methods} from "const";
import {startSpinner, stopSpinner} from "../spinner";

import * as actions from "actions";
import {dispatch, notification} from "utility";


const {GET} = methods;

const headers = {
	"Content-Type": "application/json",
};

class ApiCaller {

	private controller;
	private signal;
	private promise;
	private isSpinning;

	constructor (data: IApi) {
		this.controller = new AbortController();
		this.signal = this.controller.signal;
		this.promise = new Promise((resolve, reject) => {
			this.isSpinning = true;
			startSpinner();
			let promise: Promise<any>;
			if (data.method === GET) {
				promise = fetch(data.url, {method: data.method, signal: this.signal, headers });
			} else {
				promise = fetch(data.url, {method: data.method, signal: this.signal, body: data.data, headers });
			}
			promise = promise.then((data) => {
				stopSpinner();
				this.isSpinning = false;
				if (data.headers.get("Authorization")) {
					headers["Authorization"] = data.headers.get("Authorization");
				}
				if (data.headers.get("content-type") === "application/json") {
					return data.json();
				} else {
					return data.text();
				}
			});
			promise.then((value: IResponse) => {
				if (value.session) {
					dispatch(actions.user.setSession(value.session));
				}
				if (value.code === 0) {
					if (data.successMessage) {
						notification.notifySuccess({
							text: value.message
						});
					}
					resolve(value.data);
				} else {
					if(data.failureMessage) {
						notification.notifyError({
							text: value.message
						});
					}
					reject(value);
				}
			});
		});	
	}
	public success(successCallback:Function) {
		this.promise = this.promise.then(successCallback);
		return this;
	}
	public failure (failureCallback:Function) {
		this.promise = this.promise.catch(failureCallback);
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