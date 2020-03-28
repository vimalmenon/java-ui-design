package com.vimalmenon.application.manager.database;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.properties.Property;
import com.vimalmenon.application.data.properties.PropertyRepository;

@Service
public class PropertyManager {

	@Autowired
	private PropertyRepository propertyRepository;

	public List<Property> getProperties() {
		return propertyRepository.findAll();
	}

	public void saveProperties(List<Property> items) {
		propertyRepository.saveAll(items);
	}

	public void deleteProperties(List<Property> items) {
		propertyRepository.deleteAll(items);
	}
}
