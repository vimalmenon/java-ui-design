package com.vimalmenon.application.common.exceptions;

import com.vimalmenon.application.common.enums.ResponseCode;

public class UrlNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	private final String url;
	
	private static final ResponseCode response = ResponseCode.URL_NOT_FOUND;
	private static final int CODE = response.code;
	private static final String TYPE = response.msg; 
	private static final String MSG = "Unable to find URL %s";
	
	public UrlNotFoundException(String url) {
		super(TYPE);
		this.url = url;
	}
	
	public int getCode () 
	{
		return CODE;
	}
	@Override
	public String toString() {
		return String.format(MSG, url);
	}
	
}
