package com.vimalmenon.application.manager.database;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.user.UserPreference;
import com.vimalmenon.application.data.user.UserPreferenceRepository;

@Service
public class PreferencesManager {

	@Autowired
	private UserPreferenceRepository prefrence;
	
	public Optional<UserPreference> getUserPrefence(Integer userId) 
	{
		return prefrence.findByUserId(userId);
	}

	public void savePreferences(Integer userId, String preference) 
	{
		Optional<UserPreference> prefOptional = prefrence.findByUserId(userId);
		UserPreference prefs;
		if (prefOptional.isPresent()) {
			prefs = prefOptional.get();
			prefs.setPreference(preference);
		} else {
			prefs = new UserPreference();
			prefs.setUserId(userId);
			prefs.setPreference(preference);
		}
		prefrence.save(prefs);
	}

}
