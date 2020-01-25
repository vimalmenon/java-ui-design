package com.vimalmenon.application.common.enums;

public enum ResponseCode {
	
	SUCCESS(0, "SUCCESS"),
	EXCEPTION(1 , "Application error"),
	URL_NOT_FOUND(2, "URL not found"),
	DATABASE(3, "Database error"),
	UNAUTHORIZED_ACCESS(4, "Unauthorized access"),
	APPLICATION_ERROR(5, "Application Error");
	

	public int code;
	public String msg;
	
	private ResponseCode(int code, String msg) {
		this.code = code;
		this.msg = msg;
	}
	
}
