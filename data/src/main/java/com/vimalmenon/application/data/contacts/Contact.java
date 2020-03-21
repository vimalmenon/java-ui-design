package com.vimalmenon.application.data.contacts;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "contacts")
public class Contact {
	
	@Id
	private int id;

	@Column(nullable = false, name = "name")
	private String name;
	
	@Column(nullable = false, name = "email")
	private String email;
	
	@Column(nullable = false, name = "subject")
	private String subject;
	
	@Column(nullable = false, name = "ip_address")
	private String ipAddress;
	
	@Column(nullable = false, name = "message")
	private String message;
	    
	@Column(nullable = false, name = "time")
	private Date timeDate;
	
	@Column(nullable = false, name = "checked")
	private int read;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Date getTimeDate() {
		return timeDate;
	}

	public void setTimeDate(Date timeDate) {
		this.timeDate = timeDate;
	}

	public int getRead() {
		return read;
	}

	public void setRead(int read) {
		this.read = read;
	}

}
