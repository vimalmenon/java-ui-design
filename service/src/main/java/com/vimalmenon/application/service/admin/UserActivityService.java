package com.vimalmenon.application.service.admin;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.user.UserActivity;
import com.vimalmenon.application.manager.database.UserActivityManager;

@Service
public class UserActivityService {

	
	@Autowired
	private UserActivityManager userActivityManager;
	
	public void logUserActivity () {
		UserActivity activity = new UserActivity();
		activity.setTimeStamp(new Date());
		
		userActivityManager.saveUserActivity(activity);
	}
}
