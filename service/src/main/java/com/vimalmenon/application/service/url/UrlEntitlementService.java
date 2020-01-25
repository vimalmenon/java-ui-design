package com.vimalmenon.application.service.url;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.common.helper.Helper;
import com.vimalmenon.application.manager.database.UrlManager;
import com.vimalmenon.application.model.response.Session;

@Service
public class UrlEntitlementService {

	@Autowired
	private Session session;
	
	@Autowired
	private UrlManager urlManager;
	
	public boolean checkEntitlement(String url, String method) 
	{
		urlManager.checkEntitlement(session.getId(), Helper.urlFixer(url), method);
		System.out.println(url+ " | "+method + " "+ Helper.urlFixer(url));
		return false;
	}
	
}
