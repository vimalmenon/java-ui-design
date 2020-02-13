package com.vimalmenon.application.controller.api.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.model.component.ComponentModel;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.controller.ComponentService;

@RestController
@RequestMapping("/api/admin/component")
public class ComponentController {


	@Autowired
	private Session session;
	
	@Autowired
	private ComponentService componentService;
	
	@GetMapping("")
	public ApiResponseModel<List<ComponentModel>> getComponents ()
	{
		return new ApiResponseModel<List<ComponentModel>>(session).setData(componentService.getComponents());
	}
	
	
}
