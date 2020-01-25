package com.vimalmenon.application.service.admin;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.common.exceptions.ApplicationErrorException;
import com.vimalmenon.application.data.group.Group;
import com.vimalmenon.application.manager.UserGroupAdminManager;
import com.vimalmenon.application.model.group.GroupModel;

@Service
public class AdminService {
	
	private static String NO_USER = "No User";
	
	@SuppressWarnings("unused")
	private static String Super_Admin = "Super Admin";
	
	@Autowired
	private UserGroupAdminManager userGroupAdminManager;
	
	public GroupModel getDefaultGroup() throws ApplicationErrorException
	{
		Optional<Group> groupOptional = userGroupAdminManager.getDefaultGroup(NO_USER);
		
		if (!groupOptional.isPresent()) {
			throw new ApplicationErrorException();
		}
		
		return new GroupModel(groupOptional.get());
		
	}
}
