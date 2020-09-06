package com.vimalmenon.application.service.database;

import java.util.ArrayList;
import java.util.List;

import com.vimalmenon.application.data.content.Content;
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

	public List<ContentModel> postContent(ContentModel contentModel) {
        Content content = new Content();
        content.setId(contentModel.getId());
        content.setName(contentModel.getName());
        content.setContentData(contentModel.getContent());
        contentManager.postContent(content);
        return getContent();
	}

	public List<ContentModel> deleteContent(ContentModel contentModel) {
        Content content = new Content();
        content.setId(contentModel.getId());
        content.setName(contentModel.getName());
        content.setContentData(contentModel.getContent());
        contentManager.deleteContent(content);
		return getContent();
	}
    
}
