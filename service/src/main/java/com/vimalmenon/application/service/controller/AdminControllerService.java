package com.vimalmenon.application.service.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.model.response.Response;
import com.vimalmenon.application.model.response.Session;

@Service
public class AdminControllerService {

	@Autowired
	private Response response;

	@Autowired
	private Session session;
	
	
	public Map<String, Object> adminIndex () 
	{
		Map<String, Object> data = new HashMap<String, Object>();
		data.put("preferences", "prefs");
		return data;
	}
}
