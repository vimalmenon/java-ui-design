package com.vimalmenon.application.model.content;

import com.vimalmenon.application.data.content.Content;

public class ContentModel {

    private int id;
	private String name;
    private String content;

    public ContentModel(Content content) {
        setId(content.getId());
        setName(content.getName());
        setContent(content.getContentData());
	}

	public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
    
}
