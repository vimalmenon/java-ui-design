package com.vimalmenon.application.model.component;

import com.vimalmenon.application.data.component.Component;

public class ComponentModel {
	private int id;
	private String name;
	
	public ComponentModel(Component component) {
		setId(component.getId());
		setName(component.getName());
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
