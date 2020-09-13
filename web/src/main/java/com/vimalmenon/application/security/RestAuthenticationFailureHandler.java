package com.vimalmenon.application.security;

import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vimalmenon.application.common.enums.ResponseCode;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;


public class RestAuthenticationFailureHandler implements AccessDeniedHandler {

   
	private static ResponseCode response = ResponseCode.UNAUTHORIZED_ACCESS;
	private static final int CODE = response.code;
    private static final  String MSG = response.msg;
    
    @Autowired
    private Session session;

    @Override
    public void handle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AccessDeniedException e) throws IOException, ServletException {
        ApiResponseModel<String> output = new ApiResponseModel<>(session);
        output.setMessage(MSG);
        output.setCode(CODE);
        OutputStream out = httpServletResponse.getOutputStream();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(out, output);
        out.flush();
    }
    
}