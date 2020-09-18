package com.vimalmenon.application.controller.api;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ResolvableType;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.vimalmenon.application.common.exceptions.UrlNotFoundException;
import com.vimalmenon.application.model.admin.AdminLoginModel;
import com.vimalmenon.application.model.component.ComponentEntitlementModel;
import com.vimalmenon.application.model.component.EntitlementModel;
import com.vimalmenon.application.model.contact.ContactModel;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.model.tutorial.TutorialModel;
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

	@Autowired
	private ClientRegistrationRepository clientRegistrationRepository;

	Logger log = LoggerFactory.getLogger(ApiController.class);

	@GetMapping("")
	public ApiResponseModel<Map<String, Object>> index() {
		return new ApiResponseModel<Map<String, Object>>(session).setData(controllerService.getIndex());
	}

	@GetMapping("/about_me")
	public ApiResponseModel<Map<String, Object>> getAboutMe() {
		return new ApiResponseModel<Map<String, Object>>(session).setData(controllerService.getAboutMe());
	}

	@GetMapping("/tutorials")
	public ApiResponseModel<List<TutorialModel>> getTutorials() {
		return new ApiResponseModel<List<TutorialModel>>(session).setData(controllerService.getTutorials());
	}

	@PostMapping("/log_in")
	public ApiResponseModel<String> login(@RequestBody AdminLoginModel loginModel, HttpServletResponse response) {
		String token = adminService.logIn(loginModel, response);
		return new ApiResponseModel<String>(session).setData(token);
	}

	@PostMapping("/component_entitlement")
	public ApiResponseModel<ComponentEntitlementModel> getComponentEntitlement(
			@RequestBody EntitlementModel entitlement) {
		return new ApiResponseModel<ComponentEntitlementModel>(session)
				.setData(controllerService.getComponentEntitlement(entitlement.getName()));
	}

	@PostMapping("/save_contact")
	public ApiResponseModel<String> saveContact(@RequestBody ContactModel contact, HttpServletRequest request) {
		contactService.saveUserContact(contact, request);
		return new ApiResponseModel<String>(session).setData("Success");
	}

	@GetMapping("/contact_us")
	public ApiResponseModel<JsonNode> getContactUs() {
		return new ApiResponseModel<JsonNode>(session).setData(contactService.getContactUs());
	}

	@GetMapping("/download_resume")
	public void downloadResume () {
		log.info("vimal Menon");
	}

	@GetMapping("/offline")
	public ApiResponseModel<Map<String, Boolean>> offlinePage ()
	{
		Map<String, Boolean> data = new HashMap<>();
		data.put("offline", true);
		return new ApiResponseModel<Map<String, Boolean>>(session).setData(data);
	}
	
	@GetMapping("/oauth_login")
    public Map<String, String> getLoginPage(Model model) {
		Iterable<ClientRegistration> clientRegistrations = null;
		ResolvableType type = ResolvableType.forInstance(clientRegistrationRepository)
		  .as(Iterable.class);
		if (type != ResolvableType.NONE && 
		  ClientRegistration.class.isAssignableFrom(type.resolveGenerics()[0])) {
			clientRegistrations = (Iterable<ClientRegistration>) clientRegistrationRepository;
		}
	 
		String authorizationRequestBaseUri = "oauth2/authorization";
    	Map<String, String> oauth2AuthenticationUrls = new HashMap<>();
		clientRegistrations.forEach(registration -> 
		  oauth2AuthenticationUrls.put(registration.getClientName(), 
		  authorizationRequestBaseUri + "/" + registration.getRegistrationId())
		);
        return oauth2AuthenticationUrls;
	}

	@RequestMapping(value = "**")
	public void urlNotFound(HttpServletRequest request) 
	{
		throw new UrlNotFoundException(request.getRequestURI());
	}
	
}
