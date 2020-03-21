package com.vimalmenon.application.service.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.contacts.Contact;
import com.vimalmenon.application.manager.database.ContactManager;
import com.vimalmenon.application.model.contact.ContactAdminModel;
import com.vimalmenon.application.model.contact.ContactModel;

@Service
public class ContactService {

	@Autowired
	private ContactManager contactManager;

	public List<ContactAdminModel> getContact() {
		List<ContactAdminModel> items = new ArrayList<>();
		contactManager.getContact().forEach((contact) -> {
			ContactAdminModel data = new ContactAdminModel();
			data.setId(contact.getId());
			data.setName(contact.getName());
			data.setEmailAddress(contact.getEmail());
			data.setSubject(contact.getSubject());
			data.setMessage(contact.getMessage());
			data.setTimeDate(contact.getTimeDate());
			items.add(data);
		});
		return items;
	}
	
	public void saveUserContact (ContactModel contact) {
		Contact contactData = new Contact();
		contactData.setName(contact.getName());
		contactData.setEmail(contact.getEmailAddress());
		contactData.setSubject(contact.getSubject());
		contactData.setMessage(contact.getMessage());
		contactData.setTimeDate(new Date());
		contactManager.saveContact(contactData);
	}

	public List<ContactAdminModel> saveContact(List<ContactAdminModel> contacts) {
		List<Contact> items = new ArrayList<>();
		contacts.forEach((contact) -> {
			Contact data = new Contact();
			data.setId(contact.getId());
			data.setName(contact.getName());
			data.setEmail(contact.getEmailAddress());
			data.setSubject(contact.getSubject());
			data.setMessage(contact.getMessage());
			data.setTimeDate(contact.getTimeDate());
			items.add(data);
		});
		contactManager.saveAllContact(items);
		return getContact();
	}

	public List<ContactAdminModel> deleteContact(List<ContactAdminModel> contacts) {
		List<Contact> items = new ArrayList<>();
		contacts.forEach((contact) -> {
			Contact data = new Contact();
			data.setId(contact.getId());
			data.setName(contact.getName());
			data.setEmail(contact.getEmailAddress());
			data.setSubject(contact.getSubject());
			data.setMessage(contact.getMessage());
			data.setTimeDate(contact.getTimeDate());
			items.add(data);
		});
		contactManager.deleteContact(items);
		return getContact();
	}
}
