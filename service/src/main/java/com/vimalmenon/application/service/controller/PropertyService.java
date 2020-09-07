package com.vimalmenon.application.service.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.manager.database.PropertyManager;
import com.vimalmenon.application.model.property.PropertyModel;

import com.vimalmenon.application.data.properties.Property;

@Service
public class PropertyService {

	
	@Autowired
	private PropertyManager propertyManager;
	
	public List<PropertyModel> getProperties() {
		List<PropertyModel> items = new ArrayList<>();
		propertyManager.getProperties().forEach(property -> {
			PropertyModel model = new PropertyModel();
			model.setId(property.getId());
			model.setProperty(property.getProperty());
			model.setValue(property.getValue());
			items.add(model);
		});
		return items;
	}

	public List<PropertyModel> saveProperties(List<PropertyModel> properties) {
		List<Property> items = new ArrayList<>();
		properties.forEach(property -> {
			Property model = new Property();
			model.setId(property.getId());
			model.setProperty(property.getProperty());
			model.setValue(property.getValue());
			items.add(model);
		});
		propertyManager.saveProperties(items);
		return getProperties();
	}

	public List<PropertyModel> deleteProperties(List<PropertyModel> properties) {
		List<Property> items = new ArrayList<>();
		properties.forEach(property -> {
			Property model = new Property();
			model.setId(property.getId());
			model.setProperty(property.getProperty());
			model.setValue(property.getValue());
			items.add(model);
		});
		propertyManager.deleteProperties(items);
		return getProperties();
	}

	public Map<String, Object> getIndexProperties() 
	{
		return null;
	}

}
