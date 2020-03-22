package com.vimalmenon.application.data.device;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "device_preferences")
public class DevicePreference {
	
	@Id
	private int id;
	
	@Column(nullable = false, name = "device_id")
	private String deviceId;
	
	
	@Column(nullable = false, name = "preference")
	private String preference;


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}


	public String getDeviceId() {
		return deviceId;
	}
	public void setDeviceId(String deviceId) {
		this.deviceId = deviceId;
	}
	
	
	public String getPreference() {
		return preference;
	}
	public void setPreference(String preference) {
		this.preference = preference;
	}

}
