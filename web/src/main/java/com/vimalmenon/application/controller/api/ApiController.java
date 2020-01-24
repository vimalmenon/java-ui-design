package com.vimalmenon.application.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Response;
import com.vimalmenon.application.model.response.Session;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private Response response;

	@Autowired
	private Session session;
	
	@GetMapping("")
	public ApiResponseModel<String> index() {
		return new ApiResponseModel<String>(response, session).setData("testing");
	}
}
