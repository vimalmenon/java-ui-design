package com.vimalmenon.application.model.response;

public class ApiSessionModel {
	private int id;
	private String user;
	private String group;
	
	public ApiSessionModel(Session session) {
		setId(session.getId());
		setUser(session.getUser());
		setGroup(session.getGroup());
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getGroup() {
		return group;
	}
	public void setGroup(String group) {
		this.group = group;
	}
}

