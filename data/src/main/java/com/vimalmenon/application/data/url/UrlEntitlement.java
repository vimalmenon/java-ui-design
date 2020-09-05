package com.vimalmenon.application.data.url;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "url_entitlements")
public class UrlEntitlement {
	
	@Id
	private int id;
	
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "url_id", referencedColumnName = "id")
	private Url url;
	
	@Column(nullable = false, name = "group_id")
	private int groupId;
	
	@Column(nullable = false, name = "access")
	private int access;

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

	public int getAccess() {
		return access;
	}

	public void setAccess(int access) {
		this.access = access;
	}

	public Url getUrl() {
		return url;
	}

	public void setUrl(Url url) {
		this.url = url;
	}
	

}
