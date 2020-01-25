package com.vimalmenon.application.manager;

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
	
	
	public Optional<User> login () 
	{
		Optional<User> users = userRepository.findByUsername("vimalmenon");
		
		//return Optional.of(null);
		return users;
	}
	
	public Optional<Group> getDefaultGroup (String name)
	{
		return groupRepository.findByName(name);
	}
	private boolean verifyPassword () 
	{
		return false;
	}

}
