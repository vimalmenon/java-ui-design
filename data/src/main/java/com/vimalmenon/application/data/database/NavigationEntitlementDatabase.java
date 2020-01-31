package com.vimalmenon.application.data.database;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.vimalmenon.application.data.navigation.Navigation;

@Entity
@Table(name = "navigation_entitlements")
public class NavigationEntitlementDatabase {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable = false, name = "navigation_id")
	private Navigation navigationId;
	
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

	public Navigation getNavigationId() {
		return navigationId;
	}

	public void setNavigationId(Navigation navigationId) {
		this.navigationId = navigationId;
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
}
