package com.vimalmenon.application.service.admin;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.common.enums.Groups;
import com.vimalmenon.application.common.exceptions.ApplicationErrorException;
import com.vimalmenon.application.common.exceptions.ValidationError;
import com.vimalmenon.application.data.group.Group;
import com.vimalmenon.application.data.user.User;
import com.vimalmenon.application.data.user.UserProfile;
import com.vimalmenon.application.manager.UserGroupAdminManager;
import com.vimalmenon.application.model.account.SwitchAccountModel;
import com.vimalmenon.application.model.admin.AdminLoginModel;
import com.vimalmenon.application.model.group.GroupModel;
import com.vimalmenon.application.model.profile.UserProfileModel;
import com.vimalmenon.application.model.response.Session;

@Service
public class AdminService {
	
	
	@Autowired
	private UserGroupAdminManager userGroupAdminManager;
	
	
	@Autowired
	private Session session;
	
	public GroupModel getDefaultGroup()
	{
		Optional<Group> groupOptional = userGroupAdminManager.getGroupByName(Groups.NO_USER.name);
		if (!groupOptional.isPresent()) {
			throw new ApplicationErrorException();
		}
		return new GroupModel(groupOptional.get());
	}
	
	public Session logIn (AdminLoginModel loginModel) 
	{
		Optional<Integer> userIdOptional = Optional.ofNullable(session.getUserId());
		if(userIdOptional.isPresent()) {
			throw new ValidationError("User already login");
		}
		Optional<User> userOptional = userGroupAdminManager.login(loginModel.getUsername());
		if (userOptional.isPresent()) {
			setSessionGroup(new GroupModel(userOptional.get().getGroup()));
			session.setUser(userOptional.get().getUsername());
			session.setUserId(userOptional.get().getId());
			return session;
		}
		throw new ValidationError("Invalid Username or password");
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
	
	private void setSessionGroup (GroupModel groupModel)
	{
		session.setId(groupModel.getId());
		session.setGroup(groupModel.getName());
		session.setPriority(groupModel.getPriority());
	}

	public void switchAccount(SwitchAccountModel switchAccount) {
		Optional<Group> groupOptional = userGroupAdminManager.getGroupByName(switchAccount.getName());
		if (groupOptional.isPresent()) {
			setSessionGroup(new GroupModel(groupOptional.get()));
			return;
		}
		throw new ValidationError("Not a valid group");
	}

	public UserProfileModel getProfile() {
		UserProfileModel profile = new UserProfileModel();
		Optional<UserProfile> userProfileModel = userGroupAdminManager.getProfile(session.getUserId());
		if (userProfileModel.isPresent()) {
			profile = new UserProfileModel(userProfileModel.get());
		}
		return profile;
	}

	public UserProfileModel saveProfile(UserProfileModel profile) {
		
		UserProfile userProfile = new UserProfile();
		userProfile.setId(profile.getId());
		userProfile.setName(profile.getName());
		userProfile.setEmailAddress(profile.getEmailAddress());
		userProfile.setLocation(profile.getLocation());
		userProfile.setUserId(session.getUserId());
		userGroupAdminManager.saveProfile(userProfile);
		return getProfile();
	}
	
}
