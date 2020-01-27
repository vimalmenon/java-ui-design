package com.vimalmenon.application.controller.api;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.model.account.SwitchAccountModel;
import com.vimalmenon.application.model.navigation.NavigationModel;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.admin.AdminService;
import com.vimalmenon.application.service.controller.AdminControllerService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
	
	@Autowired
	private AdminControllerService adminControllerService;
	
	@Autowired
	private AdminService adminService;

	@Autowired
	private Session session;
	
	Logger log = LoggerFactory.getLogger(AdminController.class);
	
	@GetMapping("")
	public ApiResponseModel<Map<String, Object>> index() {
		return new ApiResponseModel<Map<String, Object>>(session).setData(adminControllerService.adminIndex());
	}
	
	@PostMapping("/log_out")
	public ApiResponseModel<String> logOut() {
		adminService.logOut();
		return new ApiResponseModel<String>(session).setData("Success");
	}
	
	@PostMapping("/switch_account")
	public ApiResponseModel<String> switchAccount(@RequestBody SwitchAccountModel switchAccount) {
		adminService.switchAccount(switchAccount);
		return new ApiResponseModel<String>(session).setData("Success");
	}
	
	@PostMapping("/preferences")
	public ApiResponseModel<String> savePreferences(@RequestBody String preferences) {
		adminControllerService.savePreferences(preferences);
		return new ApiResponseModel<String>(session).setData("Succcess");
	}
	

}
