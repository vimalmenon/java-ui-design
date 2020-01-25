package com.vimalmenon.application.controller.api;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Response;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.controller.AdminControllerService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
	
	@Autowired
	private AdminControllerService adminControllerService;
	
	@Autowired
	private Response response;

	@Autowired
	private Session session;
	
	Logger log = LoggerFactory.getLogger(AdminController.class);
	
	@GetMapping("")
	public ApiResponseModel<Map<String, Object>> index() {
		return new ApiResponseModel<Map<String, Object>>(response, session).setData(adminControllerService.adminIndex());
	}
	
	@PostMapping("/log_out")
	public ApiResponseModel<String> logOut() {
		return new ApiResponseModel<String>(response, session).setData("log-out");
	}
	
	@PostMapping("/switch_account")
	public ApiResponseModel<String> switchAccount() {
		return new ApiResponseModel<String>(response, session).setData("log-out");
	}

}
