package com.vimalmenon.application.data.user;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.vimalmenon.application.data.group.Group;

@Entity
@Table(name = "users")
public class User {
	
	@Id
	private int id;

	@Column(nullable = false, name = "username")
	private String username;

	@Column(nullable = false, name = "password")
	private String password;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "group_id", referencedColumnName = "id")
	private Group group;
	
	@Column(nullable = false, name = "is_active")
	private int isActive;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Group getGroup() {
		return group;
	}

	public void setGroup(Group group) {
		this.group = group;
	}
	public int getIsActive() {
		return isActive;
	}
	public void setIsActive(int isActive) {
		this.isActive = isActive;
	}

}
