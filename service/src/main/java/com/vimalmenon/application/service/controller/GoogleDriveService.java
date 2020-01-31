package com.vimalmenon.application.service.controller;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.zip.ZipOutputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.api.services.drive.model.File;
import com.vimalmenon.application.common.exceptions.GeneralException;
import com.vimalmenon.application.database.DatabaseManager;
import com.vimalmenon.application.enums.Sql;
import com.vimalmenon.application.google.GoogleDriveManager;
import com.vimalmenon.application.model.google.GoogleDriveFileModel;

@Service
public class GoogleDriveService {

	@Autowired
	public GoogleDriveManager googleDriveManager;
	
	@Autowired
	private DatabaseManager databaseManager;
	
	public List<GoogleDriveFileModel> listFile ()
	{
		try {
			List<File> files = googleDriveManager.listFiles();
			List<GoogleDriveFileModel>models = new ArrayList<>();
		 	for (File file : files) {
					 
				GoogleDriveFileModel googleDrive = new GoogleDriveFileModel();
				googleDrive.setName(file.getName());
				googleDrive.setKind(file.getKind());
				googleDrive.setId(file.getId());
				googleDrive.setMimeType(file.getMimeType());
				googleDrive.setParents(file.getParents());
				//googleDrive.processData(model);
				models.add(googleDrive);
			}
			return models;
		} catch (IOException e) {
			System.out.println(e);
			throw new GeneralException(e.getMessage());
		}
	}
	
	public void uploadDatabase() {
		try {
			java.io.File dbPath = new java.io.File("//application/config//db");
			List<Sql> sequence = Sql.getSequence();
			if (!dbPath.exists()) {
				dbPath.mkdir();
			}
			List<String> items = databaseManager.uploadDatabase();
			FileOutputStream out = null;
			for(int i = 0; i < items.size(); i++) {
				out = new FileOutputStream(dbPath.getAbsoluteFile() + "//" + sequence.get(i).getSqlName());
				out.write(items.get(i).getBytes());
			}
			out.close();
			
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
