package com.vimalmenon.application.common.exceptions;

import com.vimalmenon.application.common.enums.ResponseCode;

public class ApplicationErrorException extends RuntimeException  {
  

	private static final long serialVersionUID = 1L;

	private static ResponseCode response = ResponseCode.APPLICATION_ERROR;
	private final static int code = response.code;
	
	public int getCode () {
		return code;
	}
}
