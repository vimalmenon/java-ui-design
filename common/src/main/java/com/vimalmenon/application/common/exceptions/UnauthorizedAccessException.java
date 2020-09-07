package com.vimalmenon.application.common.exceptions;

import com.vimalmenon.application.common.enums.ResponseCode;

public class UnauthorizedAccessException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	private static final ResponseCode response = ResponseCode.UNAUTHORIZED_ACCESS;
	private static final int CODE = response.code;
	private static final String MSG = response.msg;
	
	public UnauthorizedAccessException() {
		super(MSG);
	}
	public int getCode ()
	{
		return CODE;
	}
	public String getMessage () {
		return MSG;
	}
}
