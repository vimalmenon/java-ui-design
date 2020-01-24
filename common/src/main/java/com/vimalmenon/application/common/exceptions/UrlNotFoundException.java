package com.vimalmenon.application.common.exceptions;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class UrlNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	Logger log = LoggerFactory.getLogger(UrlNotFoundException.class);
	
	private final String url;
	private final static int code = 2;
	private final static String type = "Url not found"; 
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
