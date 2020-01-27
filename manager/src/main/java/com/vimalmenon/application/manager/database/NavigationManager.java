package com.vimalmenon.application.manager.database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.navigation.Navigation;
import com.vimalmenon.application.data.navigation.NavigationEntitlementRepository;

@Service
public class NavigationManager {

	@Autowired
	private Navigation navigation;
	
	@Autowired
	private NavigationEntitlementRepository navigationEntitlement;
	
	
}
