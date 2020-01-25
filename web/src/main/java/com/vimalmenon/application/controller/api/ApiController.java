package com.vimalmenon.application.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.model.component.ComponentEntitlementModel;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.controller.ControllerService;

@RestController
@RequestMapping("/api")
public class ApiController {

	@Autowired
	private Session session;
	
	@Autowired
	private ControllerService controllerService;
	
	@GetMapping("")
	public ApiResponseModel<String> index() 
	{
		return new ApiResponseModel<String>(session).setData("testing");
	}
	
	@PostMapping("/log_in")
	public ApiResponseModel<String> login() 
	{
		return new ApiResponseModel<String>(session).setData("testing");
	}
	
	@GetMapping("/component_entitlement/{name}")
	public ApiResponseModel<ComponentEntitlementModel> getComponentEntitlement(@PathVariable(value = "name") final String name) 
	{
		return new ApiResponseModel<ComponentEntitlementModel>(session).setData(controllerService.getComponentEntitlement(name));
	}
	
	
}
