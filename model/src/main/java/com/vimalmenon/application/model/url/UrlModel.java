package com.vimalmenon.application.model.url;

import com.vimalmenon.application.data.url.Url;

public class UrlModel {

	private int id;
	private String url;
	private String method;
	
	public UrlModel(Url url) {
		setId(url.getId());
		setUrl(url.getUrl());
		setMethod(url.getMethod());
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getMethod() {
		return method;
	}
	public void setMethod(String method) {
		this.method = method;
	}

	@Override
	public String toString() {
		return "UrlModel [id=" + id + ", url=" + url + ", method=" + method + "]";
	}
	
}
