package com.vimalmenon.application.common.exceptions;

import com.vimalmenon.application.common.enums.ResponseCode;

public class DatabaseException extends RuntimeException {

	
	private static final long serialVersionUID = 1L;
	
	private static final ResponseCode response = ResponseCode.DATABASE;
	private static final int CODE = response.code;
		
	
	public DatabaseException(String msg) {
		super(msg);
	}
	
	public int getCode () {
		return CODE;
	}
}
