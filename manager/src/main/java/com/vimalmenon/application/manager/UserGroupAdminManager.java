package com.vimalmenon.application.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.user.User;
import com.vimalmenon.application.data.user.UserRepository;

@Service
public class UserGroupAdminManager {
	
	@Autowired
	private UserRepository userRepository;

	
	
	public void login () 
	{
		
		User user = new User();
		user.setUsername("vimalmenon");
		userRepository.findByUsername(user);
	}
	
	private boolean vertifyPassword () 
	{
		return false;
	}

}
