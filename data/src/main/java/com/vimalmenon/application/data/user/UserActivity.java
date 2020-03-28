package com.vimalmenon.application.data.user;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_activities")
public class UserActivity {

	@Id
	private int id;
	
	@Column(nullable = false, name = "user_id")
	private Integer userId;
	
	@Column(nullable = false, name = "detail")
	private String detail;
	
	@Column(nullable = true, name = "payload")
	private String payload;
	
	@Column(nullable = false, name = "time")
	private Date timeStamp;

	public UserActivity() {
	}
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public String getPayload() {
		return payload;
	}
	public void setPayload(String payload) {
		this.payload = payload;
	}
	public Date getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(Date timeStamp) {
		this.timeStamp = timeStamp;
	}
	
}
