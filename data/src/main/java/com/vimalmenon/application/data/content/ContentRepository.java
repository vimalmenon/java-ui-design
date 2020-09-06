package com.vimalmenon.application.data.content;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentRepository extends JpaRepository<Content, Integer>{

	public Optional<Content> findByName(String name);
    
}
