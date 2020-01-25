package com.vimalmenon.application.manager.database;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.url.UrlEntitlement;
import com.vimalmenon.application.data.url.UrlEntitlementRepository;

@Service
public class UrlManager {
	
	@Autowired
	private UrlEntitlementRepository urlEntitlementRepository;
	
	public Optional<UrlEntitlement> getEntitlementByGroupIdUrlMethod (int groupId, String url,String method) 
	{
		return urlEntitlementRepository.findByGroupIdAndUrlUrlAndUrlMethod(groupId, url, method);
	}

}
