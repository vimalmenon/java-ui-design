package com.vimalmenon.application.service.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.group.Group;
import com.vimalmenon.application.data.userpreference.UserPreference;
import com.vimalmenon.application.manager.UserGroupAdminManager;
import com.vimalmenon.application.manager.database.PreferencesManager;
import com.vimalmenon.application.model.group.SwitchableGroupModel;
import com.vimalmenon.application.model.response.Session;

@Service
public class AdminControllerService {

	@Autowired
	private Session session;
	
	@Autowired
	private PreferencesManager preferencesManager;
	
	@Autowired
	private UserGroupAdminManager userGroupAdminManager;
	
	
	public Map<String, Object> adminIndex () 
	{
		Map<String, Object> data = new HashMap<String, Object>();
		Optional<UserPreference> prefs = preferencesManager.getUserPrefence(session.getUserId());
		if (prefs.isPresent()) {
			data.put("preferences", prefs.get());
		}
		
		Optional<List<Group>> switchableGroup = userGroupAdminManager.getSwitchableGroups(session.getPriority());
		if (switchableGroup.isPresent()) {
			List<Group> switchGroup = switchableGroup.get();
			List<SwitchableGroupModel> groups = new ArrayList<>();
			switchGroup.forEach((group) -> {
				groups.add(new SwitchableGroupModel(group));
			});
			data.put("groups", groups);
		}
		return data;
	}
}
