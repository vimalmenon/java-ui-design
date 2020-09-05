package com.vimalmenon.application.data.tutorial;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TutorialRepository extends JpaRepository<Tutorial, Integer>{
    public Optional<Tutorial> findByName(String name);
}
