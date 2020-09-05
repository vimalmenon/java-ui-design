package com.vimalmenon.application.model.tutorial;

import com.vimalmenon.application.data.tutorial.Tutorial;

public class TutorialModel {

	private int id;
	private String name;
    private String link;
    private Integer topicId;
    private String youtubeUrl;
    private String notes;

    public TutorialModel(Tutorial tutorial) {
        setId(tutorial.getId());
        setName(tutorial.getName());
        setLink(tutorial.getLink());
        setTopicId(tutorial.getTopicId());
        setYoutubeUrl(tutorial.getYoutubeUrl());
        setNotes(tutorial.getNotes());
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

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Integer getTopicId() {
        return topicId;
    }

    public void setTopicId(Integer topicId) {
        this.topicId = topicId;
    }

    public String getYoutubeUrl() {
        return youtubeUrl;
    }

    public void setYoutubeUrl(String youtubeUrl) {
        this.youtubeUrl = youtubeUrl;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }


    
}
