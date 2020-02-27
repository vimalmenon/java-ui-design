package com.vimalmenon.application.data.youtube;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "youtube_scripts")
public class YoutubeScript {
    
    @Id
    private int id;

    @Column(nullable = false, name = "heading")
    private String heading;

    @Column(nullable = false, name = "note")
    private String note;

    @Column(nullable = true, name = "sequence")
    private Integer sequence;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getHeading() {
        return heading;
    }
    public void setHeading(String heading) {
        this.heading = heading;
    }
    public String getNote() {
        return note;
    }
    public void setNote(String note) {
        this.note = note;
    }
	public Integer getSequence() {
		return sequence;
	}
	public void setSequence(Integer sequence) {
		this.sequence = sequence;
	}

}