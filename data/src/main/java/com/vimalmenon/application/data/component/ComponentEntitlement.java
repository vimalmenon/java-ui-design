package com.vimalmenon.application.data.component;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "component_entitlements")
public class ComponentEntitlement {

	@Id
	private int id;

	@Column(nullable = false, name = "group_id")
	private int groupId;

	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "component_id", referencedColumnName = "id")
	private Component component;
	
	 public ComponentEntitlement() {
	 }
	@Column(nullable = false, name = "write_access")
	private int writeAccess;

	@Column(nullable = false, name = "read_access")
	private int readAccess;

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

	public Component getComponent() {
		return component;
	}

	public void setComponent(Component component) {
		this.component = component;
	}

	public int getWriteAccess() {
		return writeAccess;
	}

	public void setWriteAccess(int writeAccess) {
		this.writeAccess = writeAccess;
	}

	public int getReadAccess() {
		return readAccess;
	}

	public void setReadAccess(int readAccess) {
		this.readAccess = readAccess;
	}
	
	
}

