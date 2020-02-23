package com.vimalmenon.application.data.youtube;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface YoutubeScriptRepository extends JpaRepository<YoutubeScript, Integer>{
    
}