package com.vimalmenon.application.service.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.group.Group;
import com.vimalmenon.application.data.navigation.NavigationEntitlement;
import com.vimalmenon.application.data.user.User;
import com.vimalmenon.application.manager.UserGroupAdminManager;
import com.vimalmenon.application.manager.database.NavigationManager;
import com.vimalmenon.application.model.group.SwitchableGroupModel;
import com.vimalmenon.application.model.navigation.NavigationModel;
import com.vimalmenon.application.model.response.Session;

@Service
public class AdminControllerService {

	@Autowired
	private Session session;
	
	@Autowired
	private UserGroupAdminManager userGroupAdminManager;
	
	@Autowired
	private NavigationManager navigationManager;
	
	
	public Map<String, Object> adminIndex () 
	{
		
		Optional<User> userOptional = userGroupAdminManager.getUserById(session.getUserId());
		Map<String, Object> data = new HashMap<>();
		
		if(userOptional.isPresent()){
			int priorityId = userOptional.get().getGroup().getPriority();
			Optional<List<Group>> switchableGroup = userGroupAdminManager.getSwitchableGroups(priorityId);
			if (switchableGroup.isPresent()) {
				List<Group> switchGroup = switchableGroup.get();
				List<SwitchableGroupModel> groups = new ArrayList<>();
				switchGroup.forEach(group -> groups.add(new SwitchableGroupModel(group)));
				data.put("groups", groups);
			}
			
			Optional<List<NavigationEntitlement>> navigationOptional = navigationManager.getNavigation(session.getId());
			if (navigationOptional.isPresent()) {
				List<NavigationModel> navigations = new ArrayList<>();
				navigationOptional.get().forEach(navigation -> navigations.add(new NavigationModel(navigation)));
				data.put("navigations", navigations);
			}
		}
		return data;
	}


}
