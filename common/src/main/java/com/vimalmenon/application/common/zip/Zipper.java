package com.vimalmenon.application.common.zip;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import org.springframework.stereotype.Service;

@Service
public class Zipper {

	private ZipOutputStream zip;
	
	public Zipper() {
	}
	
	public void setFile (FileOutputStream fos)
	{
		zip = new ZipOutputStream(fos);
	}
	public void setFile (File file) throws FileNotFoundException
	{
		zip = new ZipOutputStream(new FileOutputStream(file.getAbsoluteFile() + ".zip"));
	}
	
	public void writeToZipFile(String path, String fileName) throws FileNotFoundException, IOException {

        File aFile = new File(path);
        FileInputStream fis = new FileInputStream(aFile);
        ZipEntry zipEntry = new ZipEntry(fileName);
        zip.putNextEntry(zipEntry);

        byte[] bytes = new byte[1024];
        int length;
        while ((length = fis.read(bytes)) >= 0) {
        	zip.write(bytes, 0, length);
        }

        zip.closeEntry();
        fis.close();
    }
	public void close () throws IOException {
		zip.close();
	}
}
