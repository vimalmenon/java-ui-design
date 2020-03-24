package com.vimalmenon.application.controller.api.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.model.property.PropertyModel;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.controller.PropertyService;

@RestController
@RequestMapping("/api/admin/property")
public class PropertyController {
	
	@Autowired
	private Session session;
	
	
	@Autowired
	private PropertyService properties;
	
	@GetMapping("")
	private ApiResponseModel<List<PropertyModel>> getProperties() {
		return new ApiResponseModel<List<PropertyModel>>(session).setData(properties.getProperties());
	}
	
	@PostMapping("")
	private ApiResponseModel<String> saveProperties (@RequestBody List<PropertyModel> properties) {
		return null;
	}
	
	@DeleteMapping("")
	private ApiResponseModel<String> deleteProperties (@RequestBody List<PropertyModel> properties) {
		return null;
	}
}
