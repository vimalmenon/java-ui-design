package com.vimalmenon.application.service.database;

import java.util.ArrayList;
import java.util.List;

import com.vimalmenon.application.manager.database.ContentManager;
import com.vimalmenon.application.model.content.ContentModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContentService {

    @Autowired
    private ContentManager contentManager;

	public List<ContentModel> getContent() {
        List<ContentModel> items = new ArrayList<>();
        contentManager.getContent().forEach(content -> items.add(new ContentModel(content)));
        return items;
    }
    
}
