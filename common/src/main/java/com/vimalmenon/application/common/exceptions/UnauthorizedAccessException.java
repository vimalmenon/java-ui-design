package com.vimalmenon.application.common.exceptions;

import com.vimalmenon.application.common.enums.ResponseCode;

public class UnauthorizedAccessException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	private static ResponseCode response = ResponseCode.UNAUTHORIZED_ACCESS;
	private final int code = response.code;
	private final static String msg = response.msg;
	
	public UnauthorizedAccessException() {
		super(msg);
	}
	public int getCode ()
	{
		return code;
	}
}
