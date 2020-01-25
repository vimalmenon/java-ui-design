package com.vimalmenon.application.model.url;

import com.vimalmenon.application.data.url.UrlEntitlement;

public class UrlEntitlementModel {

	private int id;
	private int groupId;
	private int urlId;
	private boolean access;
	
	public UrlEntitlementModel(UrlEntitlement urlEntitlement) {
		setId(urlEntitlement.getId());
		setUrlId(urlEntitlement.getUrl().getId());
		setGroupId(urlEntitlement.getGroupId());
		setAccess(urlEntitlement.getAccess() == 0 ? false : true);
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getGroupId() {
		return groupId;
	}
	public void setGroupId(int groupId) {
		this.groupId = groupId;
	}
	public int getUrlId() {
		return urlId;
	}
	public void setUrlId(int urlId) {
		this.urlId = urlId;
	}
	public boolean isAccess() {
		return access;
	}
	public void setAccess(boolean access) {
		this.access = access;
	}
	@Override
	public String toString() {
		return "UrlEntitlementModel [id=" + id + ", groupId=" + groupId + ", urlId=" + urlId + ", access=" + access
				+ "]";
	}
	
}
