package com.vimalmenon.application.common.exceptions;

public class GeneralException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	private final int code = 1;
	
	public GeneralException(String msg) {
		super(msg);
	}
	
	public int getCode () 
	{
		return code;
	}
	
}
