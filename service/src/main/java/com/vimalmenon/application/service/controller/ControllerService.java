package com.vimalmenon.application.service.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.manager.database.ComponentManager;
import com.vimalmenon.application.model.response.Session;

@Service
public class ControllerService {
	
	@Autowired
	private ComponentManager componentManager;
	
	@Autowired
	private Session session;

	public void index () 
	{
		
	}
	
	
	public void getComponentEntitlement (String name)
	{
		componentManager.checkEntitlement(session.getId(), name);
		System.out.println(name);
	}
}
