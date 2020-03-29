package com.vimalmenon.application.manager.database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.user.UserActivity;
import com.vimalmenon.application.data.user.UserActivityRepository;

@Service
public class UserActivityManager {

	@Autowired
	private UserActivityRepository userActivityRepository;
	
	public void saveUserActivity(UserActivity activity) {
		userActivityRepository.save(activity);
	}

}
