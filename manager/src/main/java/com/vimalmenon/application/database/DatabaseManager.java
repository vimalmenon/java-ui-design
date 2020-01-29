package com.vimalmenon.application.database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.group.GroupRepository;
import com.vimalmenon.application.data.note.NoteRepository;
import com.vimalmenon.application.data.url.UrlEntitlementRepository;
import com.vimalmenon.application.data.url.UrlRepository;
import com.vimalmenon.application.data.user.UserPreferenceRepository;
import com.vimalmenon.application.data.user.UserRepository;

@Service
public class DatabaseManager {

	@Autowired
	private GroupRepository groupRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserPreferenceRepository userPreferenceRepository;
	
	@Autowired
	private NoteRepository noteRepository;
	
	@Autowired
	private UrlRepository urlRepository;
	
	@Autowired
	private UrlEntitlementRepository urlEntitlementRepository;
	
	
	
	public void uploadDatabase() {
		groupRepository.findAll();
		userRepository.findAll();
		userPreferenceRepository.findAll();
		noteRepository.findAll();
		urlRepository.findAll();
		urlEntitlementRepository.findAll();
		
	}

}
