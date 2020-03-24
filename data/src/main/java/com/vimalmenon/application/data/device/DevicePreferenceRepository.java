package com.vimalmenon.application.data.device;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DevicePreferenceRepository extends JpaRepository<DevicePreference, Integer>{
	
	public DevicePreference findByDeviceId(String deviceId);
}
