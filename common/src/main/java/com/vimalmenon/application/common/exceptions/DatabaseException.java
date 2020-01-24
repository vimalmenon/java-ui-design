package com.vimalmenon.application.common.exceptions;

import com.vimalmenon.application.common.enums.ResponseCode;

public class DatabaseException extends RuntimeException {

	
	private static final long serialVersionUID = 1L;
	
	private static ResponseCode response = ResponseCode.DATABASE;
	private final static int code = response.code;
		
	
	public DatabaseException(String msg) {
		super(msg);
	}
	
	public int getCode () {
		return code;
	}
}
