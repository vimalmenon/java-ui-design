package com.vimalmenon.application.manager.database;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.userpreference.UserPreference;
import com.vimalmenon.application.data.userpreference.UserPreferenceRepository;

@Service
public class PreferencesManager {

	@Autowired
	private UserPreferenceRepository prefrence;
	
	public Optional<UserPreference> getUserPrefence(Integer userId) {
		return prefrence.findByUserId(userId);
	}

}
