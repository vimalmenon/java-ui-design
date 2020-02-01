package com.vimalmenon.application.data.group;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "groups")
public class Group {
	
	@Id
	private int id;

	@Column(nullable = false, name = "name")
	private String name;

	@Column(nullable = true, name = "priority")
	private Integer priority;

	public Group() {
	}
	public Group(int id, String name, Integer priority) {
		this.id = id;
		this.name = name;
		this.priority = priority;
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
	
}
