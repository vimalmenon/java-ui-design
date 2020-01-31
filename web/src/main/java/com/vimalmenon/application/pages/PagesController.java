package com.vimalmenon.application.pages;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class PagesController {
	
	@RequestMapping(value = "")
	public String index() {
		return "index";

	}
	@RequestMapping(value = "{path:(?!static|error).*$}/**")
	public String urlNotFound(HttpServletRequest request) 
	{
		return "index";
	}

}
