package com.vimalmenon.application.common.exceptions;

import com.vimalmenon.application.common.enums.ResponseCode;

public class GeneralException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	private static ResponseCode response = ResponseCode.EXCEPTION;
	private final static int code = response.code;
	
	public GeneralException(String msg) {
		super(msg);
	}
	
	public int getCode () 
	{
		return code;
	}
	
}
