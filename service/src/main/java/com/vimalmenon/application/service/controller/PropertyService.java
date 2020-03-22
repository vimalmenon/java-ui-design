package com.vimalmenon.application.service.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.manager.database.PropertyManager;
import com.vimalmenon.application.model.property.PropertyModel;

@Service
public class PropertyService {

	
	@Autowired
	private PropertyManager propertyManager;
	
	public List<PropertyModel> getProperties() {
		List<PropertyModel> items = new ArrayList<>();
		propertyManager.getProperties().forEach((property) -> {
			PropertyModel model = new PropertyModel();
			model.setId(property.getId());
			model.setProperty(property.getProperty());
			model.setValue(property.getValue());
			items.add(model);
		});
		return items;
	}

}
