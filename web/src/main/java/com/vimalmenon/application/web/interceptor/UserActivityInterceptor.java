package com.vimalmenon.application.web.interceptor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;

import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.admin.AdminService;

public class UserActivityInterceptor implements HandlerInterceptor{
	
	@Autowired
	private Session session;
	
	@Autowired
	private AdminService adminService;
}
