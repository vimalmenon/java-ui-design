package com.vimalmenon.application.manager;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.group.Group;
import com.vimalmenon.application.data.group.GroupRepository;
import com.vimalmenon.application.data.user.User;
import com.vimalmenon.application.data.user.UserRepository;

@Service
public class UserGroupAdminManager {
	
	@Autowired
	private UserRepository userRepository;
	
	
	@Autowired
	private GroupRepository groupRepository;
	
	
	public Optional<User> login (String username) 
	{
		return userRepository.findByUsername(username);
	}
	
	public Optional<Group> getGroupByName (String name)
	{
		return groupRepository.findByName(name);
	}
	
	public Optional<User> getUserById (int userId)
	{
		return userRepository.findById(userId);
	}
	@SuppressWarnings("unused")
	private boolean verifyPassword () 
	{
		return false;
	}

	public Optional<List<Group>> getSwitchableGroups(int groupId) {
		return groupRepository.findByPriorityGreaterThanEqual(groupId);
	}

}
