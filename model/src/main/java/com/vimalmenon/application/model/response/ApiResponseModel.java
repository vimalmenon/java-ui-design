package com.vimalmenon.application.model.response;

import com.vimalmenon.application.common.enums.ResponseCode;

public class ApiResponseModel<T> {
	private int code;
	private String message;
	private ApiSessionModel session;
	private T data;
	
	private ResponseCode responseCode = ResponseCode.SUCCESS;

	public ApiResponseModel(Response response, Session session) {
		setCode(responseCode.code);
		setMessage(responseCode.msg);
		setSession(new ApiSessionModel(session));
	}
	
	public ApiResponseModel(Session session) {
		setCode(responseCode.code);
		setMessage(responseCode.msg);
		setSession(new ApiSessionModel(session));
	}

	public int getCode() {
		return code;
	}

	public ApiResponseModel<T> setCode(int code) {
		this.code = code;
		return this;
	}

	public String getMessage() {
		return message;
	}

	public ApiResponseModel<T> setMessage(String message) {
		this.message = message;
		return this;
	}

	public ApiSessionModel getSession() {
		return session;
	}

	public void setSession(ApiSessionModel session) {
		this.session = session;
	}

	public T getData() {
		return data;
	}

	public ApiResponseModel<T> setData(T data) {
		this.data = data;
		return this;
	}

}

