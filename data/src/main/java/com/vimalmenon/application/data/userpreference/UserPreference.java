package com.vimalmenon.application.data.userpreference;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_preferences")
public class UserPreference {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable = true, name = "user_id")
	private Integer userId;

	@Column(nullable = false, name = "preference")
	private String preference;

}
