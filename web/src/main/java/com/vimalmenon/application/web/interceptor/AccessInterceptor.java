package com.vimalmenon.application.web.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.vimalmenon.application.common.enums.Groups;
import com.vimalmenon.application.common.exceptions.UnauthorizedAccessException;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.url.UrlEntitlementService;

@Component
public class AccessInterceptor implements HandlerInterceptor{

	@Autowired
	private UrlEntitlementService urlEntitlementService;
	
	@Autowired
	private Session session;
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		String url = request.getRequestURI();
		String method = request.getMethod();
		if (method.equals("OPTIONS")) {
			return true;
		}
		if (session.getGroup().equals(Groups.SUPER_ADMIN.name)) {
			return true;
		}
		if(url.startsWith("/api/admin") && !urlEntitlementService.hasAccess(url, method) ) {
			throw new UnauthorizedAccessException();
		}
		return true;
	}
}
