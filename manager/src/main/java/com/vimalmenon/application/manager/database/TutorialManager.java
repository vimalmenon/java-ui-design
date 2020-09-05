package com.vimalmenon.application.manager.database;

import java.util.Optional;

import com.vimalmenon.application.data.tutorial.Tutorial;
import com.vimalmenon.application.data.tutorial.TutorialRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TutorialManager {

    @Autowired
    private TutorialRepository tutorialRepository;

    public Optional<Tutorial> getAboutMeVideos() 
    {
        return tutorialRepository.findById(1);
    }
}
