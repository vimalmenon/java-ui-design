package com.vimalmenon.application.security;

import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vimalmenon.application.common.enums.ResponseCode;
import com.vimalmenon.application.common.exceptions.UnauthorizedAccessException;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

public class RestAuthenticationEntryPoint implements AuthenticationEntryPoint {
    
    private static ResponseCode response = ResponseCode.UNAUTHORIZED_ACCESS;
	private final int code = response.code;
    private final static String msg = response.msg;
    
    @Autowired
    private Session session;

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse httpReponse,
    AuthenticationException e) throws IOException, ServletException, UnauthorizedAccessException {
        ApiResponseModel<String> response = new ApiResponseModel<String>(session);
        response.setMessage(msg);
        response.setCode(code);
        //httpReponse.sendError(HttpServletResponse.SC_FORBIDDEN);
        OutputStream out = httpReponse.getOutputStream();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(out, response);
        out.flush();
    }
}