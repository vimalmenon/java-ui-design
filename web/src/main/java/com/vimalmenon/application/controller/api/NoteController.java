package com.vimalmenon.application.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.model.response.Session;

@RestController
@RequestMapping("/api/admin/notes")
public class NoteController {

	@Autowired
	private Session session;
	
}
