package com.vimalmenon.application.model.google;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GoogleDriveFileModel {
	private String id;
	private String name;
	private String mimeType;
	private String createdDate;
	private List<String> parents;
	private Boolean ownedByMe;
	private List<GoogleDriveFileModel> children = new ArrayList<>();
	public static Map<String, List<GoogleDriveFileModel>> parentMap = new HashMap<>();
	public static GoogleDriveFileModel topElement = null;
	
	
	public GoogleDriveFileModel() {
	}
	
	public GoogleDriveFileModel(String parentId) {
		if (topElement == null) {
			GoogleDriveFileModel model = new GoogleDriveFileModel();
			model.setName("Personal Drive");
			model.setMimeType("application/vnd.google-apps.folder");
			model.setParents(new ArrayList<>());
			model.setOwnedByMe(true);
			model.setId(parentId);
			topElement = model;
		}
	}
	
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
	
	public String getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}
	public Boolean getOwnedByMe() {
		return ownedByMe;
	}
	public void setOwnedByMe(Boolean ownedByMe) {
		this.ownedByMe = ownedByMe;
	}
	public static Map<String, List<GoogleDriveFileModel>> getParentMap() {
		return parentMap;
	}
	public static void setParentMap(Map<String, List<GoogleDriveFileModel>> parentMap) {
		GoogleDriveFileModel.parentMap = parentMap;
	}
	public void processData ()
	{
		for(String parent: parents) {
			List<GoogleDriveFileModel> items = parentMap.get(parent);
			if (items == null) {
				items = new ArrayList<>();
			}
			items.add(this);
			parentMap.put(parent, items);
		}
	}
	
	public static void sync () 
	{
		updateModel(topElement);
		parentMap = new HashMap<>();
	}
	private static void updateModel (GoogleDriveFileModel model)
	{
		List<GoogleDriveFileModel> items = parentMap.get(model.id);
		if (items != null) {
			model.children.addAll(items);
		}
		for (GoogleDriveFileModel child:model.children) {
			updateModel(child);
		}
	}
	@Override
	public String toString() {
		return "GoogleDriveFileModel [id=" + id + ", name=" + name + ", mimeType=" + mimeType + ", createdDate="
				+ createdDate + ", parents=" + parents + ", ownedByMe=" + ownedByMe + ", children=" + children + "]";
	}

}
