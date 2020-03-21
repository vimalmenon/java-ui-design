package com.vimalmenon.application.manager.database;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.contacts.Contact;
import com.vimalmenon.application.data.contacts.ContactRepository;



@Service
public class ContactManager {

	
	@Autowired
	private ContactRepository contactRepository;
	
	public void saveContact(Contact contactData) {
		contactRepository.save(contactData);
	}

	public List<Contact> getContact() {
		return contactRepository.findAll();
	}

	
	
}
