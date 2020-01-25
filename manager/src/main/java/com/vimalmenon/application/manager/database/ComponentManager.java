package com.vimalmenon.application.manager.database;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.component.ComponentEntitlement;
import com.vimalmenon.application.data.component.ComponentEntitlementRepository;

@Service
public class ComponentManager {

	@Autowired
	private ComponentEntitlementRepository componentEntitlementRepository;
	
	
	public Optional<ComponentEntitlement> checkEntitlement(int groupId, String name) {
		return componentEntitlementRepository.findByGroupIdAndComponentName(groupId, name);
	}

}
