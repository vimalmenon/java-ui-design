package com.vimalmenon.application.manager.database;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.component.Component;
import com.vimalmenon.application.data.component.ComponentEntitlement;
import com.vimalmenon.application.data.component.ComponentEntitlementRepository;
import com.vimalmenon.application.data.component.ComponentRepository;

@Service
public class ComponentManager {

	@Autowired
	private ComponentEntitlementRepository componentEntitlementRepository;
	
	@Autowired
	private ComponentRepository componentRepository;
	
	
	public Optional<ComponentEntitlement> checkEntitlement(int groupId, String name) {
		return componentEntitlementRepository.findByGroupIdAndComponentName(groupId, name);
	}


	public List<Component> getAllComponents() {
		return componentRepository.findAll();
	}

}
