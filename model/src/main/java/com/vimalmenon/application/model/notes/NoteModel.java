package com.vimalmenon.application.model.notes;

import com.vimalmenon.application.data.note.Note;

public class NoteModel {
	
	
	private int id;
	private Integer userId;
	private String title;
	private String note;
	
	
	public NoteModel() {
	}
	public NoteModel (Note note) {
		setId(note.getId());
		setUserId(note.getUserId());
		setTitle(note.getTitle());
		setNote(note.getNote());
	}

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public Integer getUserId() {
		return userId;
	}


	public void setUserId(Integer userId) {
		this.userId = userId;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getNote() {
		return note;
	}


	public void setNote(String note) {
		this.note = note;
	}
	
	
	
}
