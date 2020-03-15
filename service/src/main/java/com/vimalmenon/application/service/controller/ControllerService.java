package com.vimalmenon.application.service.controller;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.component.ComponentEntitlement;
import com.vimalmenon.application.manager.database.ComponentManager;
import com.vimalmenon.application.model.component.ComponentEntitlementModel;
import com.vimalmenon.application.model.contact.ContactModel;
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
	
	
	public ComponentEntitlementModel getComponentEntitlement (String name)
	{
		Optional<ComponentEntitlement> entitlementOption = componentManager.checkEntitlement(session.getId(), name);
		if (entitlementOption.isPresent()) {
			return new ComponentEntitlementModel(entitlementOption.get());
		}
		return new ComponentEntitlementModel();

	}


	public void saveContact(ContactModel contact) {
		// TODO Auto-generated method stub
		
	}
}
