package com.vimalmenon.application.web.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.vimalmenon.application.model.response.Session;

@Component
public class SessionInterceptor implements HandlerInterceptor{
	
	@Autowired
	private Session session;


	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		/*if (!session.isSession()) {
			GroupModel groupModel = adminService.getDefaultGroup();
			session.setId(groupModel.getId());
			session.setGroup(groupModel.getName());
			session.setPriority(groupModel.getPriority());
			session.setSession(true);
		}*/
		return true;
	}
}
