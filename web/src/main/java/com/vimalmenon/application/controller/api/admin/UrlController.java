package com.vimalmenon.application.controller.api.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.model.url.UrlModel;
import com.vimalmenon.application.service.url.UrlEntitlementService;

@RestController
@RequestMapping("/api/admin/url")
public class UrlController {

	@Autowired
	private Session session;
	
	@Autowired
	private UrlEntitlementService urlEntitlementService;
	
	@GetMapping("")
	public ApiResponseModel<List<UrlModel>> getUrls ()
	{
		return new ApiResponseModel<List<UrlModel>>(session).setData(urlEntitlementService.getUrls());
	}
}
