package com.vimalmenon.application.controller;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.vimalmenon.application.common.exceptions.GeneralException;
import com.vimalmenon.application.common.exceptions.UrlNotFoundException;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Response;
import com.vimalmenon.application.model.response.Session;

@RestControllerAdvice
public class ApiControllerAdvice {

	@Autowired
	private Response response;

	@Autowired
	private Session session;
	
	Logger log = LoggerFactory.getLogger(ApiControllerAdvice.class);
	
	@ExceptionHandler(value = UrlNotFoundException.class)
	public ApiResponseModel<String> urlNotFound(final UrlNotFoundException exception, HttpServletResponse httpResponse) {
		log.error(exception.getMessage());
		httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		return new ApiResponseModel<String>(response, session).setMessage(exception.toString())
				.setCode(exception.getCode());
	}
	
	@ExceptionHandler(value = GeneralException.class)
	public ApiResponseModel<String> generalException(final GeneralException exception, HttpServletResponse httpResponse) {
		log.error(exception.getMessage());
		httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		return new ApiResponseModel<String>(response, session).setMessage(exception.toString())
				.setCode(exception.getCode());
	}
	
	@ExceptionHandler(value = Exception.class)
	public ApiResponseModel<String> exception(final Exception exception, HttpServletResponse httpResponse) throws Exception
	{
		return this.generalException(new GeneralException(exception.getMessage()), httpResponse);
	}
	
}
