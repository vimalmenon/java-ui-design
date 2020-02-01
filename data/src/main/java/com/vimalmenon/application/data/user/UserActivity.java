package com.vimalmenon.application.data.user;

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
	
	@Column(nullable = false, name = "ip_address")
	private String ipAddress;
	
	@Column(nullable = false, name = "detail")
	private String detail;
	
	@Column(nullable = false, name = "time_stamp")
	private String timeStamp;

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

	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public String getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(String timeStamp) {
		this.timeStamp = timeStamp;
	}
	
}
