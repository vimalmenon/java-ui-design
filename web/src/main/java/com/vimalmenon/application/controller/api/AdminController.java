package com.vimalmenon.application.controller.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.common.exceptions.UrlNotFoundException;
import com.vimalmenon.application.controller.ApiControllerAdvice;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Response;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.controller.ControllerService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
	
	@Autowired
	private ControllerService controllerService;
	
	@Autowired
	private Response response;

	@Autowired
	private Session session;
	
	Logger log = LoggerFactory.getLogger(AdminController.class);
	
	@GetMapping("")
	public ApiResponseModel<String> index() throws Exception {
		controllerService.adminIndex();
		log.info("this is vimal menon");
		throw new RuntimeException("vimal menon");
		//return new ApiResponseModel<String>(response, session).setData("testing admin");
	}
	

}
