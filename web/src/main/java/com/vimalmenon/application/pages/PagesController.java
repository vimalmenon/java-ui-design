package com.vimalmenon.application.pages;

import java.io.File;

import javax.servlet.http.HttpServletResponse;

import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class PagesController {
	
	@RequestMapping(value = "")
	public String index() {
		return "index";
	}
	@GetMapping(value = "/sw")
	public ResponseEntity<FileSystemResource> getSw(HttpServletResponse response) {
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.set("Content-Type","application/javascript; charset=UTF-8");
		String fileName = "static/static/sw.js";
        File file = new File(this.getClass().getClassLoader().getResource(fileName).getFile());
        
		return new ResponseEntity<>(new FileSystemResource(file), responseHeaders,HttpStatus.OK);
	}
	@RequestMapping(value = "{path:(?!static|error).*$}/**")
	public String urlNotFound() 
	{
		return "index";
	}

}
