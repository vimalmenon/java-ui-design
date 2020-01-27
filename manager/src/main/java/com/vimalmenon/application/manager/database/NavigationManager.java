package com.vimalmenon.application.manager.database;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.navigation.NavigationEntitlement;
import com.vimalmenon.application.data.navigation.NavigationEntitlementRepository;
import com.vimalmenon.application.data.navigation.NavigationRepository;

@Service
public class NavigationManager {

	@Autowired
	private NavigationRepository navigation;
	
	@Autowired
	private NavigationEntitlementRepository navigationEntitlement;

	public Optional<List<NavigationEntitlement>> getNavigation(int id) {
		return navigationEntitlement.findByGroupId(id);
	}
	
	
}
