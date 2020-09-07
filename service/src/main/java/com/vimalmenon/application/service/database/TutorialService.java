package com.vimalmenon.application.service.database;

import java.util.ArrayList;
import java.util.List;

import com.vimalmenon.application.manager.database.TutorialManager;
import com.vimalmenon.application.model.tutorial.TutorialModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TutorialService {

    @Autowired
    private TutorialManager tutorialManager;
    
	public List<TutorialModel> getHomeTutorials() {
        List<TutorialModel> items = new ArrayList<>();
        tutorialManager.getTutorials().forEach(tutorial -> items.add(new TutorialModel(tutorial)));
        return items;
	}
    
}
