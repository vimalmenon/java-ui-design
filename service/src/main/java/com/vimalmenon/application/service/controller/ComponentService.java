package com.vimalmenon.application.service.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.component.ComponentEntitlement;
import com.vimalmenon.application.manager.database.ComponentManager;
import com.vimalmenon.application.model.component.ComponentModel;

@Service
public class ComponentService {

	@Autowired
	private ComponentManager componentManager;

	public List<ComponentModel> getComponents() {
		List<ComponentModel> items = new ArrayList<>();
		componentManager.getAllComponents().forEach((component) -> {
			items.add(new ComponentModel(component));
		});
		return items;
	}
}
