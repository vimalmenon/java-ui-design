package com.vimalmenon.application.common.exceptions;

import com.vimalmenon.application.common.enums.ResponseCode;

public class GeneralException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	private static ResponseCode response = ResponseCode.EXCEPTION;
	private final static int code = response.code;
	private final String msg = "Error while processing request";
	
	public GeneralException(String msg) {
		super(msg);
	}
	
	public int getCode () 
	{
		return code;
	}
	public String getMessage () {
		return msg;
	}
}
