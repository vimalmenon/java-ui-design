package com.vimalmenon.application.controller.api;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.common.exceptions.UrlNotFoundException;
import com.vimalmenon.application.model.admin.AdminLoginModel;
import com.vimalmenon.application.model.component.ComponentEntitlementModel;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.admin.AdminService;
import com.vimalmenon.application.service.controller.ControllerService;

@RestController
@RequestMapping("/api")
public class ApiController {

	@Autowired
	private Session session;
	
	@Autowired
	private ControllerService controllerService;
	
	@Autowired
	private AdminService adminService;
	
	@GetMapping("")
	public ApiResponseModel<String> index() 
	{
		return new ApiResponseModel<String>(session).setData("testing");
	}
	
	@PostMapping("/log_in")
	public ApiResponseModel<String> login(@RequestBody AdminLoginModel loginModel) 
	{
		return new ApiResponseModel<String>(adminService.logIn(loginModel)).setData("Success");
	}
	
	@PostMapping("/component_entitlement")
	public ApiResponseModel<ComponentEntitlementModel> getComponentEntitlement(@RequestBody String name) 
	{
		return new ApiResponseModel<ComponentEntitlementModel>(session).setData(controllerService.getComponentEntitlement(name));
	}
	
	@RequestMapping(value = "**")
	public void urlNotFound(HttpServletRequest request) 
	{
		throw new UrlNotFoundException(request.getRequestURI());
	}
}
