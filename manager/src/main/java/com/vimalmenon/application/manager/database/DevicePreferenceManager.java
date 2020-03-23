package com.vimalmenon.application.manager.database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.device.DevicePreferenceRepository;

@Service
public class DevicePreferenceManager {

	@Autowired
	private DevicePreferenceRepository preferenceRepository;
	
	public void getDevicePreference (String deviceId) {
		
	}
	public void saveDevicePreference () {
		
	}
}
