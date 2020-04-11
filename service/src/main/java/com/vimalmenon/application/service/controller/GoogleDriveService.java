package com.vimalmenon.application.service.controller;

import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
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
	
	
	/*@Autowired
	private GoogleAuthManager googleAuthManager;
	*/
	@Autowired
	private DatabaseManager databaseManager;

	private final String fileName = "database";  
	
	@Autowired
	private Zipper zip;
	
	Logger log = LoggerFactory.getLogger(GoogleDriveService.class);
	
	private String getFileLocation ()
	{
		Path currentRelativePath = Paths.get(fileName);
		String absolutePath = currentRelativePath.toAbsolutePath().toString();
		return absolutePath;
	}
	private void createDatabaseFolderIfNotExists (java.io.File dbPath) {
		if (!dbPath.exists()) {
			dbPath.mkdir();
		}
	}
	public boolean deleteDirectory (java.io.File file)
	{
		java.io.File[] contents = file.listFiles();
		if (contents != null) {
			for (java.io.File f : contents) {
				deleteDirectory(f);
			}
		}
		return file.delete();
	}
	public GoogleDriveFileModel listFile ()
	{
		try {
			List<File> files = googleDriveManager.listFiles();
		 	for (File file : files) {
		 		if(file.getOwnedByMe()) {
		 			GoogleDriveFileModel googleDrive = new GoogleDriveFileModel("0AJps9nc-JhH-Uk9PVA");
		 			googleDrive.setName(file.getName());
					googleDrive.setCreatedDate(file.getCreatedTime().toString());
					googleDrive.setOwnedByMe(file.getOwnedByMe());
					googleDrive.setId(file.getId());
					googleDrive.setMimeType(file.getMimeType());
					googleDrive.setParents(file.getParents());
					googleDrive.processData();	
		 		}
			}
		 	GoogleDriveFileModel.sync();
		 	return GoogleDriveFileModel.topElement;
		} catch (IOException e) {
			throw new GeneralException(e.getMessage());
		}
	}
	
	public void uploadDatabase() {
		try {
			java.io.File dbPath = new java.io.File(getFileLocation());
			createDatabaseFolderIfNotExists(dbPath);

			zip.setFile(dbPath);
			List<Sql> sequence = Sql.getSequence();
			
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
			deleteDirectory(dbPath);
			filePath.delete();
		} catch (IOException e) {
			log.error(e.getMessage());
			throw new GeneralException(e.getMessage());
		}
		
	}

	public void restoreDatabase(GoogleDriveFileModel model) {
		String destDir = getFileLocation();
		String zipFilePath = destDir + "//db.zip";
		java.io.File fileName = new java.io.File(zipFilePath);

		createDatabaseFolderIfNotExists(new java.io.File(destDir));
				
		try {
			googleDriveManager.downloadFile(fileName, model.getId());
			zip.unzip(zipFilePath, destDir);
			List<Sql> sequence = Sql.getSequence();
			
			databaseManager.unset();
			sequence.forEach((item) -> {
				try {
					String st;
					java.io.File dbPath = new java.io.File(destDir + "//" + item.getSqlName());
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
			deleteDirectory(new java.io.File(destDir));
			fileName.delete();
		} catch (IOException e1) {
			log.error("Exception for : ", e1);
			throw new GeneralException(e1.getMessage());
		}
		
	}

	public List<GoogleDriveFileModel> listDatabases() {
		try {
			List<File> files = googleDriveManager.getDatabaseFiles().getFiles();
			List<GoogleDriveFileModel> models = new ArrayList<>();
			for (File file : files) {
				GoogleDriveFileModel googleDrive = new GoogleDriveFileModel();
	 			googleDrive.setName(file.getName());
				googleDrive.setCreatedDate(file.getCreatedTime().toString());
				googleDrive.setOwnedByMe(file.getOwnedByMe());
				googleDrive.setId(file.getId());
				googleDrive.setMimeType(file.getMimeType());
				models.add(googleDrive);
			}
			return models;
		} catch (IOException e) {
			log.error("Exception for : ", e);
			throw new GeneralException(e.getMessage());
		}
	}
	
}
