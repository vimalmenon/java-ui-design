package com.vimalmenon.application.model.group;

import com.vimalmenon.application.data.group.Group;

public class SwitchableGroupModel {
	private int id;
	private String name;

	public SwitchableGroupModel(Group group) {
		setId(group.getId());
		setName(group.getName());
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
	
	
	
}
