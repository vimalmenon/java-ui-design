package com.vimalmenon.application.google;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Service;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.FileContent;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.Drive.Files;
import com.google.api.services.drive.DriveScopes;
import com.google.api.services.drive.model.File;
import com.google.api.services.drive.model.FileList;

@Service
public class GoogleDriveManager {

	private static final String APPLICATION_NAME = "vimalmenon";
    private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
    private static final String TOKENS_DIRECTORY_PATH = "tokens";

    private static final List<String> SCOPES = Collections.singletonList(DriveScopes.DRIVE);
    
    private static final String CREDENTIALS_FILE_PATH = "/credentials.json";
    
    private Drive service;
    
    private static Credential getCredentials(final NetHttpTransport HTTP_TRANSPORT) throws IOException {
        // Load client secrets.
        InputStream in = GoogleDriveManager.class.getResourceAsStream(CREDENTIALS_FILE_PATH);
        if (in == null) {
            throw new FileNotFoundException("Resource not found: " + CREDENTIALS_FILE_PATH);
        }
        GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));

        // Build flow and trigger user authorization request.
        GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(HTTP_TRANSPORT, JSON_FACTORY,
                clientSecrets, SCOPES)
                        .setDataStoreFactory(new FileDataStoreFactory(new java.io.File(TOKENS_DIRECTORY_PATH)))
                        .setAccessType("offline").build();
        LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8888).build();
        return new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
    }
    
    GoogleDriveManager() throws GeneralSecurityException, IOException {
        final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
        service = new Drive.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
                .setApplicationName(APPLICATION_NAME)
                .build();
    }
    
    public List<File> listFiles() throws IOException {
    	List<File> result = new ArrayList<File>();
        Files.List request = service.files().list().setFields("nextPageToken, files(id, name, parents, createdTime, mimeType, ownedByMe)");
        //.setQ("ownedByMe=true")
        do {
            FileList files = request.execute();
            result.addAll(files.getFiles());
            request.setPageToken(files.getNextPageToken());
        } while (request.getPageToken() != null &&
                 request.getPageToken().length() > 0);
        return result;
	}
    public void putFile (String fileName, String filePathName) throws IOException
    {
    	File fileMetadata = new File();
    	fileMetadata.setName(fileName);
    	List<String> parents = new ArrayList<>();
    	parents.add("1r43e9alIO3bdm4vzqDaVnYZ5wmhMN5fr");
    	fileMetadata.setParents(parents);
    	java.io.File filePath = new java.io.File(filePathName);
    	FileContent mediaContent = new FileContent("application/zip", filePath);
    	File file = service.files().create(fileMetadata, mediaContent)
    	    .setFields("id")
    	    .execute();
    	System.out.println("File ID: " + file.getId());
    }

	public FileList getDatabaseFiles() throws IOException {
		return service.files().list().setFields("nextPageToken, files(id, name, parents, createdTime, mimeType, ownedByMe)").setQ("parents='1r43e9alIO3bdm4vzqDaVnYZ5wmhMN5fr'").execute();
	}
	public OutputStream downloadFile(String fileId) throws IOException {
		OutputStream outputStream = new FileOutputStream("testing.zip");
		service.files().get(fileId)
		    .executeMediaAndDownloadTo(outputStream);
		return outputStream;
	}
}
