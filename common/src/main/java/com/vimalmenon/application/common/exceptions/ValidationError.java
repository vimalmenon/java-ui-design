package com.vimalmenon.application.common.exceptions;

import com.vimalmenon.application.common.enums.ResponseCode;

public class ValidationError extends RuntimeException{

	
	private static final long serialVersionUID = 1L;
	
	private static final ResponseCode response = ResponseCode.VALIDATION_ERROR;
	private static final int CODE = response.code;
	private final String message;

	public ValidationError(String msg) {
		super(msg);
		this.message = msg;
	}
	public int getCode ()
	{
		return CODE;
	}
	@Override
	public String getMessage() {
		return message;
	}

}
