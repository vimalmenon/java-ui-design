package com.vimalmenon.application.common.exceptions;

import com.vimalmenon.application.common.enums.ResponseCode;

public class UrlNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	private final String url;
	
	private static ResponseCode response = ResponseCode.URL_NOT_FOUND;
	private final static int code = response.code;
	private final static String type = response.msg; 
	private final static String msg = "Unable to find URL %s";
	
	public UrlNotFoundException(String url) {
		super(type);
		this.url = url;
	}
	
	public int getCode () 
	{
		return code;
	}
	@Override
	public String toString() {
		return String.format(msg, url);
	}
	
}
