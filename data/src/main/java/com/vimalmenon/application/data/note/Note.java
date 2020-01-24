package com.vimalmenon.application.data.note;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "notes")
public class Note {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable = true, name = "user_id")
	private Integer userId;

	@Column(nullable = false, name = "title")
	private String title;

	@Column(nullable = false, name = "note")
	private String note;
}
