package com.vimalmenon.application.manager.database;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.note.Note;
import com.vimalmenon.application.data.note.NoteRepository;

@Service
public class NoteManager {

	@Autowired
	private NoteRepository noteRepository;

	public Optional<List<Note>> getNotes(int userId) {
		return noteRepository.findByUserId(userId);
	}

	public void saveNotes(List<Note> nodes) {
		noteRepository.saveAll(nodes);
	}

	public void deleteNotes(List<Note> nodes) {
		noteRepository.deleteAll(nodes);
	}
	
	
}
