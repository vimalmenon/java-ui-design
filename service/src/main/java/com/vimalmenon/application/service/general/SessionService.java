package com.vimalmenon.application.service.general;

import com.vimalmenon.application.data.user.User;
import com.vimalmenon.application.model.group.GroupModel;
import com.vimalmenon.application.model.response.Session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SessionService {
    
    @Autowired
    private Session session;


    public void setSession (GroupModel groupModel)
    {
        session.setId(groupModel.getId());
        session.setGroup(groupModel.getName());
        session.setPriority(groupModel.getPriority());
        session.setUser(null);
        session.setUserId(null);
    }

    public void setSession(User user) 
    {
        setSessionGroup(new GroupModel(user.getGroup()));
        session.setUser(user.getUsername());
        session.setUserId(user.getId());
    }
    
    private void setSessionGroup (GroupModel groupModel)
	{
		session.setId(groupModel.getId());
		session.setGroup(groupModel.getName());
		session.setPriority(groupModel.getPriority());
	}
}