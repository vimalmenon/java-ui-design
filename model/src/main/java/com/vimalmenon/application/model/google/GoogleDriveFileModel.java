package com.vimalmenon.application.model.google;


public class GoogleDriveFileModel {
	private String Id;
	private String Name;
	private String mimeType;
	private String parents;
	private boolean hasThumbnail;
	private boolean thumbnailLink;
	
	
	public String getId() {
		return Id;
	}
	public void setId(String id) {
		Id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getMimeType() {
		return mimeType;
	}
	public void setMimeType(String mimeType) {
		this.mimeType = mimeType;
	}
	public String getParents() {
		return parents;
	}
	public void setParents(String parents) {
		this.parents = parents;
	}
	public boolean isHasThumbnail() {
		return hasThumbnail;
	}
	public void setHasThumbnail(boolean hasThumbnail) {
		this.hasThumbnail = hasThumbnail;
	}
	public boolean isThumbnailLink() {
		return thumbnailLink;
	}
	public void setThumbnailLink(boolean thumbnailLink) {
		this.thumbnailLink = thumbnailLink;
	}
	
	

}
