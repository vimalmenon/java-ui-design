package com.vimalmenon.application.common.enums;

public enum ResponseCode {
	
	SUCCESS(0, "SUCCESS"),
	EXCEPTION(1 , "Application Error"),
	URL(2, "URL not found"),
	DATABASE(3, "Database Error"),
	Unauthorized_ACCESS(4, "Unauthorized access");
	

	public int code;
	public String msg;
	
	private ResponseCode(int code, String msg) {
		this.code = code;
		this.msg = msg;
	}
	
}
