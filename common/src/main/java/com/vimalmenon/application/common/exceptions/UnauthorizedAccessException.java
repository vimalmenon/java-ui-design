package com.vimalmenon.application.common.exceptions;

public class UnauthorizedAccessException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	private final int code = 4;
	private final static String msg = "Unauthorized access";
	
	public UnauthorizedAccessException() {
		super(msg);
	}
	public int getCode ()
	{
		return code;
	}
}
