package com.vimalmenon.application.manager.database;

import java.util.List;
import java.util.Optional;

import com.vimalmenon.application.data.content.Content;
import com.vimalmenon.application.data.content.ContentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContentManager {

    @Autowired
    private ContentRepository contentRepository;

    public List<Content> getContent() {
        return contentRepository.findAll();
    }

    public Content postContent(Content contentModel) {
        return contentRepository.save(contentModel);
    }

    public void deleteContent(Content content) {
        contentRepository.delete(content);
    }

    public Optional<Content> getContentByName(String name) {
        return contentRepository.findByName(name);
    }
}
