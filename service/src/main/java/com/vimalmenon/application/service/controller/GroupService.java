package com.vimalmenon.application.service.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.manager.database.GroupManager;
import com.vimalmenon.application.model.group.GroupModel;

@Service
public class GroupService {
	
	@Autowired
	private GroupManager groupManager;

	public List<GroupModel> getGroups() {
		List<GroupModel> items = new ArrayList<>();
		groupManager.getGroups().forEach(group -> items.add(new GroupModel(group)));
		return items;
	}

}
