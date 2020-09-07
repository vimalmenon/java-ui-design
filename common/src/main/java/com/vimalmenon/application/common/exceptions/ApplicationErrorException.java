package com.vimalmenon.application.common.exceptions;

import com.vimalmenon.application.common.enums.ResponseCode;

public class ApplicationErrorException extends RuntimeException  {
  

	private static final long serialVersionUID = 1L;

	private static final ResponseCode response = ResponseCode.APPLICATION_ERROR;
	private static final int CODE = response.code;
	
	public int getCode () {
		return CODE;
	}
}
