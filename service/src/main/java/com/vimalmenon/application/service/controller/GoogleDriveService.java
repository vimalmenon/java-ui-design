package com.vimalmenon.application.service.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.google.GoogleDriveManager;

@Service
public class GoogleDriveService {

	@Autowired
	public GoogleDriveManager googleDriveManager;
	
	public void listFile () throws IOException 
	{
		googleDriveManager.listFiles();
	}
}
