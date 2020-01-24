package com.vimalmenon.application.data.component;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "component_entitlements")
public class ComponentEntitlement {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(nullable = false, name = "group_id")
	private int groupId;

	@Column(nullable = false, name = "component_id")
	private int componentId;

	@Column(nullable = false, name = "write_access")
	private int writeAccess;

	@Column(nullable = false, name = "read_access")
	private int readAccess;
}

