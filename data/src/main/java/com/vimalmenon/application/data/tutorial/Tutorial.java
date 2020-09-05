package com.vimalmenon.application.data.tutorial;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tutorials")
public class Tutorial {
    @Id
	private int id;

	@Column(nullable = false, name = "name")
	private String name;

	@Column(nullable = false, name = "link")
    private String link;


    @Column(nullable = true, name = "topic_id")
    private Integer topicId;
    
    @Column(nullable = false, name = "youtube_url")
    private String youtubeUrl;
    
    @Column(nullable = true, name = "notes")
    private String notes;

    
}
