package com.vimalmenon.application.controller.api;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.model.account.SwitchAccountModel;
import com.vimalmenon.application.model.content.ContentModel;
import com.vimalmenon.application.model.profile.UserProfileModel;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.admin.AdminService;
import com.vimalmenon.application.service.controller.AdminControllerService;
import com.vimalmenon.application.service.database.ContentService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

	@Autowired
	private AdminControllerService adminControllerService;

	@Autowired
	private AdminService adminService;

	@Autowired
	private ContentService contentService;

	@Autowired
	private Session session;

	Logger log = LoggerFactory.getLogger(AdminController.class);

	@GetMapping("")
	public ApiResponseModel<Map<String, Object>> index() {
		return new ApiResponseModel<Map<String, Object>>(session).setData(adminControllerService.adminIndex());
	}

	@PostMapping("/log_out")
	public ApiResponseModel<String> logOut(HttpServletResponse response) {
		adminService.logOut(response);
		return new ApiResponseModel<String>(session).setData("Success");
	}

	@PostMapping("/switch_account")
	public ApiResponseModel<String> switchAccount(@RequestBody SwitchAccountModel switchAccount) {
		adminService.switchAccount(switchAccount);
		return new ApiResponseModel<String>(session).setData("Success");
	}

	@GetMapping("/profile")
	public ApiResponseModel<UserProfileModel> getProfile() {
		return new ApiResponseModel<UserProfileModel>(session).setData(adminService.getProfile());
	}

	@PostMapping("/profile")
	public ApiResponseModel<UserProfileModel> saveProfile(@RequestBody UserProfileModel profile) {
		return new ApiResponseModel<UserProfileModel>(session).setData(adminService.saveProfile(profile));
	}

	@GetMapping("/content")
	public ApiResponseModel<List<ContentModel>> getContent() {
		return new ApiResponseModel<List<ContentModel>>(session).setData(contentService.getContent());
	}
	@PostMapping("/content")
	public ApiResponseModel<List<ContentModel>> postContent(@RequestBody ContentModel contentModel) {
		return new ApiResponseModel<List<ContentModel>>(session).setData(contentService.postContent(contentModel));
	}

	@DeleteMapping("/content")
	public ApiResponseModel<List<ContentModel>> deleteContent(@RequestBody ContentModel contentModel) {
		return new ApiResponseModel<List<ContentModel>>(session).setData(contentService.deleteContent(contentModel));
	}
}
