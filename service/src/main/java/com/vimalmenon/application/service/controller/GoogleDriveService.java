package com.vimalmenon.application.service.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.api.services.drive.model.File;
import com.vimalmenon.application.common.exceptions.GeneralException;
import com.vimalmenon.application.google.GoogleDriveManager;
import com.vimalmenon.application.model.google.GoogleDriveFileModel;

@Service
public class GoogleDriveService {

	@Autowired
	public GoogleDriveManager googleDriveManager;
	
	public List<GoogleDriveFileModel> listFile ()
	{
		try {
			List<File> files = googleDriveManager.listFiles();
			List<GoogleDriveFileModel> model = new ArrayList<>();
			for (File file : files) {
				GoogleDriveFileModel googleDrive = new GoogleDriveFileModel();
				googleDrive.setName(file.getName());
				googleDrive.setKind(file.getKind());
				googleDrive.setId(file.getId());
				googleDrive.setMimeType(file.getMimeType());
				googleDrive.setParents(file.getParents());
				googleDrive.setHasThumbnail(file.getHasThumbnail());
				googleDrive.setThumbnailLink(file.getThumbnailLink());
				googleDrive.processData(model);
	        }
			return model;
		} catch (IOException e) {
			System.out.println(e);
			throw new GeneralException(e.getMessage());
		}
	}
}
