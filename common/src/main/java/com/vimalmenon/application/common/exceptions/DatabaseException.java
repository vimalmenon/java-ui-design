package com.vimalmenon.application.common.exceptions;

public class DatabaseException extends RuntimeException {

	
	private static final long serialVersionUID = 1L;
	private final static int code = 3;
	
	public DatabaseException(String msg) {
		super(msg);
	}
	
	public int getCode () {
		return code;
	}
}
