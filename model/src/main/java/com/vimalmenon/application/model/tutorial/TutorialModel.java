package com.vimalmenon.application.model.tutorial;

import com.vimalmenon.application.data.tutorial.Tutorial;

public class TutorialModel {

	private int id;
	private String name;
    private String link;
    private Integer topicId;
    private String youtubeId;
    private String notes;

    public TutorialModel(Tutorial tutorial) {
        setId(tutorial.getId());
        setName(tutorial.getName());
        setLink(tutorial.getLink());
        setTopicId(tutorial.getTopicId());
        setYoutubeId(tutorial.getYoutubeId());
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
    

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getYoutubeId() {
        return youtubeId;
    }

    public void setYoutubeId(String youtubeId) {
        this.youtubeId = youtubeId;
    }

    
}
