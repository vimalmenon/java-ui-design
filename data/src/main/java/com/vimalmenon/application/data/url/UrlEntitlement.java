package com.vimalmenon.application.data.url;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "url_entitlements")
public class UrlEntitlement {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable = false, name = "url_id")
	private int urlId;
	
	@Column(nullable = false, name = "group_id")
	private int groupId;
	
	@Column(nullable = false, name = "access")
	private int access;

}
