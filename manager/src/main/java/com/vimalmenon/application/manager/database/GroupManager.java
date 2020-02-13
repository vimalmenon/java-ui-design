package com.vimalmenon.application.manager.database;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.group.Group;
import com.vimalmenon.application.data.group.GroupRepository;

@Service
public class GroupManager {

	@Autowired
	private GroupRepository groupRepository;

	public List<Group> getGroups() {
		return groupRepository.findAll();
	}
	
}
