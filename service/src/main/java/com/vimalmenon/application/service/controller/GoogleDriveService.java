package com.vimalmenon.application.service.controller;

import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.api.services.drive.model.File;
import com.vimalmenon.application.common.exceptions.GeneralException;
import com.vimalmenon.application.common.zip.Zipper;
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
	
	@Autowired
	private Zipper zip;
	
	Logger log = LoggerFactory.getLogger(GoogleDriveService.class);
	
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
			
			zip.setFile(dbPath);
			List<Sql> sequence = Sql.getSequence();
			if (!dbPath.exists()) {
				dbPath.mkdir();
			}
			List<String> items = databaseManager.uploadDatabase();
			FileOutputStream out = null;
			for(int i = 0; i < items.size(); i++) {
				out = new FileOutputStream(dbPath.getAbsolutePath() + "//" + sequence.get(i).getSqlName());
				out.write(items.get(i).getBytes());
				zip.writeToZipFile(dbPath.getAbsolutePath() + "/" +sequence.get(i).getSqlName(), sequence.get(i).getSqlName());
			}
			out.close();
			zip.close();
			
			java.io.File filePath = new java.io.File(dbPath.getAbsoluteFile() + ".zip");
			System.out.println(filePath.getAbsoluteFile());
			
			googleDriveManager.putFile("db.zip", filePath.getAbsolutePath());
		} catch (IOException e) {
			log.error(e.getMessage());
			throw new GeneralException(e.getMessage());
		}
		
	}

	public void restoreDatabase(GoogleDriveFileModel model) {
		String zipFilePath = "//application/config//db.zip";
		String destDir = "//application/config//database";
		zip.unzip(zipFilePath, destDir);
		List<Sql> sequence = Sql.getSequence();
		
		databaseManager.unset();
		sequence.forEach((item) -> {
			try {
				String st;
				java.io.File dbPath = new java.io.File("//application/config//database//"+item.getSqlName());
				BufferedReader br = new BufferedReader(new FileReader(dbPath));
				StringBuilder builder = new StringBuilder();
				while ((st = br.readLine()) != null) {
					builder.append(st);
				}
				br.close();
				databaseManager.restoreDatabase(item, builder.toString());
			} catch (BeansException | IOException e) {
				log.error("Exception for : ", e);
				throw new GeneralException(e.getMessage());
			}
		});
		databaseManager.set();
		
	}

	public List<GoogleDriveFileModel> listDatabases() {
		List<GoogleDriveFileModel> models = new ArrayList<>();
		try {
			List<File> files = googleDriveManager.getDatabaseFiles().getFiles();
			for (File file : files) {
				GoogleDriveFileModel googleDrive = new GoogleDriveFileModel();
				googleDrive.setName(file.getName());
				googleDrive.setKind(file.getKind());
				googleDrive.setId(file.getId());
				googleDrive.setMimeType(file.getMimeType());
				googleDrive.setParents(file.getParents());
				models.add(googleDrive);
			}
		} catch (IOException e) {
			log.error("Exception for : ", e);
			throw new GeneralException(e.getMessage());
		}
		return models;
	}
}
