package com.vimalmenon.application.common.exceptions;

import com.vimalmenon.application.common.enums.ResponseCode;

public class GeneralException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	private static final ResponseCode response = ResponseCode.EXCEPTION;
	private static final int CODE = response.code;
	private static final String MSG = "Error while processing request";
	
	public GeneralException(String msg) {
		super(msg);
	}
	
	public GeneralException(Exception e) {
	}

	public int getCode () 
	{
		return CODE;
	}
	@Override
	public String getMessage () {
		return MSG;
	}
}
