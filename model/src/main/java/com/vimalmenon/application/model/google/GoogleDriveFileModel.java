package com.vimalmenon.application.model.google;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

public class GoogleDriveFileModel {
	private String id;
	private String name;
	private String mimeType;
	private String kind;
	private List<String> parents;
	private List<GoogleDriveFileModel> children = new ArrayList<>();
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMimeType() {
		return mimeType;
	}
	public void setMimeType(String mimeType) {
		this.mimeType = mimeType;
	}
	public String getKind() {
		return kind;
	}
	public void setKind(String kind) {
		this.kind = kind;
	}
	public List<String> getParents() {
		return parents;
	}
	public void setParents(List<String> parents) {
		this.parents = parents;
	}

	
	public List<GoogleDriveFileModel> getChildren() {
		return children;
	}
	public void setChildren(List<GoogleDriveFileModel> children) {
		this.children = children;
	}
	public List<GoogleDriveFileModel> processData (List<GoogleDriveFileModel> models)
	{
		if (this.parents == null) {
			models.add(this);
			return models;
		}else if (!checkChildrenAndAdd(models, this)) {
			models.add(this);
		}
		return models;
	}
	public boolean checkChildrenAndAdd(List<GoogleDriveFileModel> models, GoogleDriveFileModel children)
	{
		boolean isAdded = false;
		ListIterator<GoogleDriveFileModel> items = models.listIterator();
		while(items.hasNext()) {
			GoogleDriveFileModel model = items.next();
			if (model.parents == null) {
				isAdded = false;
			} else {
				for(String parent: model.parents) {
					isAdded = checkChildrenAndAdd(model.children, this);
					if (model.id.equals(parent)) {
						isAdded = true;
						model.children.add(children);
					}
				}
			}
		}
		return isAdded;
	}
	
	@Override
	public String toString() {
		return "GoogleDriveFileModel [Id=" + id + ", Name=" + name + ", mimeType=" + mimeType + ", kind=" + kind
				+ ", parents=" + parents + "]";
	}

}
