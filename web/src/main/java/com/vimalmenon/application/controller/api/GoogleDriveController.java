package com.vimalmenon.application.controller.api;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.service.controller.GoogleDriveService;

@RestController
@RequestMapping("/api/google_drive")
public class GoogleDriveController {

	@Autowired
	private GoogleDriveService googleDriveService;
	
	@GetMapping("")
	public void listFile ()
	{
		try {
			googleDriveService.listFile();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public void uploadDatabase ()
	{
		
	}
	
}
