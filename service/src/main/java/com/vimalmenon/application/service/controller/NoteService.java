package com.vimalmenon.application.service.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.note.Note;
import com.vimalmenon.application.manager.database.NoteManager;
import com.vimalmenon.application.model.notes.NoteModel;
import com.vimalmenon.application.model.response.Session;

@Service
public class NoteService {

	@SuppressWarnings("unused")
	@Autowired
	private Session session;
	
	@Autowired
	private NoteManager noteManager;

	public List<NoteModel> getNotes() {
		 Optional<List<Note>> notesOptional = noteManager.getNotes(session.getUserId());
		 List<NoteModel> notes = new ArrayList<>();
		 if (notesOptional.isPresent()) {
			 notesOptional.get().forEach((note) -> {
				 notes.add(new NoteModel(note));
			 });
		 }
		 return notes;
	}

	public List<NoteModel> saveNotes(List<NoteModel> notesModel) {
		List<Note> nodes = new ArrayList<>();
		notesModel.forEach((NoteModel) -> {
			Note note = new Note();
			note.setId(NoteModel.getId());
			note.setUserId(session.getUserId());
			note.setNote(NoteModel.getNote());
			note.setTitle(NoteModel.getTitle());
			nodes.add(note);
		});
		noteManager.saveNotes(nodes);
		return getNotes();
	}

	public List<NoteModel> deleteNotes(List<NoteModel> notesModel) {
		List<Note> nodes = new ArrayList<>();
		notesModel.forEach((NoteModel) -> {
			Note note = new Note();
			note.setId(NoteModel.getId());
			note.setUserId(session.getUserId());
			note.setNote(NoteModel.getNote());
			note.setTitle(NoteModel.getTitle());
			nodes.add(note);
		});
		noteManager.deleteNotes(nodes);
		return getNotes();
		
	}
	
	
	
}
