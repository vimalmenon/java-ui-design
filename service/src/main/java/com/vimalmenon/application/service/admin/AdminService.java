package com.vimalmenon.application.service.admin;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.common.exceptions.ApplicationErrorException;
import com.vimalmenon.application.data.group.Group;
import com.vimalmenon.application.manager.UserGroupAdminManager;
import com.vimalmenon.application.model.admin.AdminLoginModel;
import com.vimalmenon.application.model.group.GroupModel;
import com.vimalmenon.application.model.response.Session;

@Service
public class AdminService {
	
	@SuppressWarnings("unused")
	private static String NO_USER = "No User";
	@SuppressWarnings("unused")
	private static String Super_Admin = "Super Admin";
	@SuppressWarnings("unused")
	private static String Visitor = "Visitor";
	
	
	@Autowired
	private UserGroupAdminManager userGroupAdminManager;
	
	@Autowired
	private Session session;
	
	public GroupModel getDefaultGroup()
	{
		Optional<Group> groupOptional = userGroupAdminManager.getDefaultGroup(NO_USER);
		
		if (!groupOptional.isPresent()) {
			throw new ApplicationErrorException();
		}
		
		return new GroupModel(groupOptional.get());
		
	}
	
	public void logIn (AdminLoginModel loginModel) 
	{
		
	}

	public void logOut() 
	{
		GroupModel groupModel = getDefaultGroup();
		session.setId(groupModel.getId());
		session.setGroup(groupModel.getName());
		session.setPriority(groupModel.getPriority());
		session.setSession(true);
		session.setUser(null);
		session.setUserId(null);
	}
}
