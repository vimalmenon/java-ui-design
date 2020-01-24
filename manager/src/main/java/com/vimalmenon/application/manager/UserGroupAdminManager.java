package com.vimalmenon.application.manager;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.user.User;
import com.vimalmenon.application.data.user.UserRepository;

@Service
public class UserGroupAdminManager {
	
	@Autowired
	private UserRepository userRepository;

	
	
	public Optional<User> login () 
	{
		
		Optional<User> users = userRepository.findByUsername("vimalmenon");
		
		//return Optional.of(null);
		return users;
	}
	
	private boolean vertifyPassword () 
	{
		return false;
	}

}
