package com.vimalmenon.application.data.url;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "urls")
public class Url {
	
	@Id
	private int id;

	@Column(nullable = false, name = "url")
	private String urlData;

	@Column(nullable = false, name = "method")
	private String method;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMethod() {
		return method;
	}

	public void setMethod(String method) {
		this.method = method;
	}

	public String getUrlData() {
		return urlData;
	}

	public void setUrlData(String urlData) {
		this.urlData = urlData;
	}
	
}
