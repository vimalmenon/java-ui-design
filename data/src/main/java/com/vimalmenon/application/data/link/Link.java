package com.vimalmenon.application.data.link;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "links")
public class Link {
	@Id
	private int id;

	@Column(nullable = false, name = "name")
	private String name;
	
	@Column(nullable = false, name = "title")
	private String title;

	@Column(nullable = false, name = "url")
	private String url;

	@Column(nullable = false, name = "type")
	private String type;

	@Column(nullable = false, name = "is_active")
	private int isActive;


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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getIsActive() {
		return isActive;
	}

	public void setIsActive(int isActive) {
		this.isActive = isActive;
	}

}
