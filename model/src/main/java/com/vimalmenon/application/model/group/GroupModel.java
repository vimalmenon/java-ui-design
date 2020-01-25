package com.vimalmenon.application.model.group;

import com.vimalmenon.application.data.group.Group;

public class GroupModel {
	
	private int id;
	private String name;
	private Integer priority;
	
	public GroupModel(Group group) {
		setId(group.getId());
		setName(group.getName());
		setPriority(group.getPriority());
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
	public Integer getPriority() {
		return priority;
	}
	public void setPriority(Integer priority) {
		this.priority = priority;
	}
	@Override
	public String toString() {
		return "GroupModel [id=" + id + ", name=" + name + ", priority=" + priority + "]";
	}

}
