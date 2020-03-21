package com.vimalmenon.application.controller;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.vimalmenon.application.common.exceptions.ApplicationErrorException;
import com.vimalmenon.application.common.exceptions.DatabaseException;
import com.vimalmenon.application.common.exceptions.GeneralException;
import com.vimalmenon.application.common.exceptions.UnauthorizedAccessException;
import com.vimalmenon.application.common.exceptions.UrlNotFoundException;
import com.vimalmenon.application.common.exceptions.ValidationError;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;

@RestControllerAdvice
public class ApiControllerAdvice {

	@Autowired
	private Session session;
	
	Logger log = LoggerFactory.getLogger(ApiControllerAdvice.class);
	
	@ExceptionHandler(value = UrlNotFoundException.class)
	public ApiResponseModel<String> urlNotFound(final UrlNotFoundException exception, HttpServletResponse httpResponse) {
		log.error(exception.getMessage());
		httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		return new ApiResponseModel<String>(session).setMessage(exception.toString())
				.setCode(exception.getCode());
	}
	
	@ExceptionHandler(value = GeneralException.class)
	public ApiResponseModel<String> generalException(final GeneralException exception, HttpServletResponse httpResponse) {
		log.error(exception.getMessage());
		httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		return new ApiResponseModel<String>(session).setMessage(exception.toString())
				.setCode(exception.getCode());
	}
	@ExceptionHandler(value = DatabaseException.class)
	public ApiResponseModel<String> generalException(final DatabaseException exception, HttpServletResponse httpResponse) {
		log.error(exception.getMessage());
		httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		return new ApiResponseModel<String>(session).setMessage(exception.toString())
				.setCode(exception.getCode());
	}
	@ExceptionHandler(value = ApplicationErrorException.class)
	public ApiResponseModel<String> applicationErrorException(final ApplicationErrorException exception, HttpServletResponse httpResponse) {
		log.error(exception.getMessage());
		httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		return new ApiResponseModel<String>(session).setMessage(exception.toString())
				.setCode(exception.getCode());
	}
	@ExceptionHandler(value = UnauthorizedAccessException.class)
	public ApiResponseModel<String> unauthorizedAccessException(final UnauthorizedAccessException exception, HttpServletResponse httpResponse) {
		log.error(exception.getMessage());
		httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		return new ApiResponseModel<String>(session).setMessage(exception.toString())
				.setCode(exception.getCode());
	}
	@ExceptionHandler(value = ValidationError.class)
	public ApiResponseModel<String> validationError(final ValidationError exception, HttpServletResponse httpResponse) {
		log.error("Validation Error : ", exception);
		return new ApiResponseModel<String>(session).setMessage(exception.getMessage())
				.setCode(exception.getCode());
	}
	 
	@ExceptionHandler(value = Exception.class)
	public ApiResponseModel<String> exception(final Exception exception, HttpServletResponse httpResponse) throws Exception
	{
		return this.generalException(new GeneralException(exception.getMessage()), httpResponse);
	}
	
}
