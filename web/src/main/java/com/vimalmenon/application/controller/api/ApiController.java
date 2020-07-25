package com.vimalmenon.application.controller.api;

import java.security.Principal;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.common.exceptions.UrlNotFoundException;
import com.vimalmenon.application.model.admin.AdminLoginModel;
import com.vimalmenon.application.model.component.ComponentEntitlementModel;
import com.vimalmenon.application.model.component.EntitlementModel;
import com.vimalmenon.application.model.contact.ContactModel;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.admin.AdminService;
import com.vimalmenon.application.service.controller.ContactService;
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
	
	@Autowired
	private ContactService contactService;
	
	@GetMapping("")
	public ApiResponseModel<Map<String, Object>> index() 
	{	
		return new ApiResponseModel<Map<String, Object>>(session).setData(controllerService.getIndex());
	}
	
	@PostMapping("/tutorials")
	public ApiResponseModel<String> getTutorials () 
	{
		return new ApiResponseModel<String>(session).setData(controllerService.getTutorials());
	}
	
	@PostMapping("/log_in")
	public ApiResponseModel<String> login(@RequestBody AdminLoginModel loginModel, HttpServletResponse response) 
	{
		String token = adminService.logIn(loginModel, response);
		return new ApiResponseModel<String>(session).setData(token);
	}
	
	@PostMapping("/component_entitlement")
	public ApiResponseModel<ComponentEntitlementModel> getComponentEntitlement(@RequestBody EntitlementModel entitlement) 
	{
		return new ApiResponseModel<ComponentEntitlementModel>(session).setData(controllerService.getComponentEntitlement(entitlement.getName()));
	}
	
	@PostMapping("/save_contact")
	public ApiResponseModel<String> saveContact (@RequestBody ContactModel contact, HttpServletRequest request) 
	{
		contactService.saveUserContact(contact, request);
		return new ApiResponseModel<String>(session).setData("Success");
	}
	
	@GetMapping("/download_resume")
	public void downloadResume () {
		
	}

	@GetMapping("/offline_page")
	public ApiResponseModel<String> offlinePage ()
	{
		return new ApiResponseModel<String>(session).setData("Success");
	}
	
	@RequestMapping(value = "/user")
	public Principal user(Principal principal) {
		return principal;
	}
	
	@RequestMapping(value = "**")
	public void urlNotFound(HttpServletRequest request) 
	{
		throw new UrlNotFoundException(request.getRequestURI());
	}
}
