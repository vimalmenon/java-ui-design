package com.vimalmenon.application.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.service.controller.GoogleDriveService;

@RestController
@RequestMapping("/api/google_drive")
public class GoogleDriveController {

	@SuppressWarnings("unused")
	@Autowired
	private GoogleDriveService googleDriveService;
	
	
	public void uploadDatabase ()
	{
		
	}
	
}
