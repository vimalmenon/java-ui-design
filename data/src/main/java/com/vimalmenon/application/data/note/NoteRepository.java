package com.vimalmenon.application.data.note;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends JpaRepository<Note, Integer> {
	
	public Optional<List<Note>> findByUserId(Integer userid);

}
