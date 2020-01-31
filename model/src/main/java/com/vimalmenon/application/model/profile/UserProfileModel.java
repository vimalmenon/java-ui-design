package com.vimalmenon.application.model.profile;

import com.vimalmenon.application.data.user.UserProfile;

public class UserProfileModel {
	
	private int id;
	private String name;
	private String emailAddress;
	private String location;
	
	
	public UserProfileModel() {
	}
	public UserProfileModel(UserProfile profile) {
		setId(profile.getId());
		setName(profile.getName());
		setEmailAddress(profile.getEmailAddress());
		setLocation(profile.getLocation());
	}
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
	public String getEmailAddress() {
		return emailAddress;
	}
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	

}
