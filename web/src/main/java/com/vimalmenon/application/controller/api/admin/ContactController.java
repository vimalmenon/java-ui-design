package com.vimalmenon.application.controller.api.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.model.contact.ContactAdminModel;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.controller.ContactService;

@RestController
@RequestMapping("/api/admin/contact")
public class ContactController {
	
	@Autowired
	private ContactService contactService;
	
	@Autowired
	private Session session;
	
	
	@GetMapping("")
	public ApiResponseModel<List<ContactAdminModel>> getContact () 
	{
		
		return new ApiResponseModel<List<ContactAdminModel>>(session).setData(contactService.getContact());
	}
	
	@PostMapping("")
	public ApiResponseModel<List<ContactAdminModel>> saveContact (@RequestBody List<ContactAdminModel> contacts) 
	{
		return null;
	}
	@DeleteMapping("")
	public ApiResponseModel<List<ContactAdminModel>> deleteContact () 
	{
		return null;
	}

}
