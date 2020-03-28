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
	private PropertyService propertiesService;
	
	@GetMapping("")
	private ApiResponseModel<List<PropertyModel>> getProperties() {
		return new ApiResponseModel<List<PropertyModel>>(session).setData(propertiesService.getProperties());
	}
	
	@PostMapping("")
	private ApiResponseModel<List<PropertyModel>> saveProperties (@RequestBody List<PropertyModel> properties) {
		return new ApiResponseModel<List<PropertyModel>>(session).setData(propertiesService.saveProperties(properties));
	}
	
	@DeleteMapping("")
	private ApiResponseModel<List<PropertyModel>> deleteProperties (@RequestBody List<PropertyModel> properties) {
		return new ApiResponseModel<List<PropertyModel>>(session).setData(propertiesService.deleteProperties(properties));
	}
}
