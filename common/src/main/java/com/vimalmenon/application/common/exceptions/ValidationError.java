package com.vimalmenon.application.common.exceptions;

import com.vimalmenon.application.common.enums.ResponseCode;

public class ValidationError extends RuntimeException{

	
	private static final long serialVersionUID = 1L;
	
	private static ResponseCode response = ResponseCode.VALIDATION_ERROR;
	private final static int code = response.code;
	
	public ValidationError(String msg) {
		super(msg);
	}
	public int getCode ()
	{
		return code;
	}

}
