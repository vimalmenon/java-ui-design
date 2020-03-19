package com.vimalmenon.application.controller.api;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.model.google.GoogleDriveFileModel;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.controller.GoogleDriveService;

@RestController
@RequestMapping("/api/admin/google_drive")
public class GoogleDriveController {

	@Autowired
	private Session session;
	
	@Autowired
	private GoogleDriveService googleDriveService;
	
	@GetMapping("")
	public ApiResponseModel<GoogleDriveFileModel> listFile ()
	{
		return new ApiResponseModel<GoogleDriveFileModel>(session).setData(googleDriveService.listFile());
	}
	
	
	@GetMapping("/upload_database")
	public ApiResponseModel<String> uploadDatabase ()
	{
		googleDriveService.uploadDatabase();
		return new ApiResponseModel<String>(session).setData("Success");
	}
	
	@PostMapping("/restore_database")
	public ApiResponseModel<String> restoreDatabase (@RequestBody GoogleDriveFileModel model)
	{
		googleDriveService.restoreDatabase(model);
		return new ApiResponseModel<String>(session).setData("Success");
	}
	
	@GetMapping("/list_databases")
	public ApiResponseModel<List<GoogleDriveFileModel>> listDatabases ()
	{
		return new ApiResponseModel<List<GoogleDriveFileModel>>(session).setData(googleDriveService.listDatabases());
	}
	
	@GetMapping("/download_database")
	public void downloadDatabase ()
	{
		googleDriveService.getDownload();
	}
	
	@GetMapping("/testing")
	public void testing()
	{
		googleDriveService.getDetails();
	}
}
