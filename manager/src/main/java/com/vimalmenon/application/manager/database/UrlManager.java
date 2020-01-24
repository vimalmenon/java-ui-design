package com.vimalmenon.application.manager.database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.url.UrlEntitlementRepository;

@Service
public class UrlManager {
	
	@Autowired
	private UrlEntitlementRepository urlEntitlementRepository;
	
	public boolean checkEntitlement (int groupId, String url,String method) {
		
		System.out.println(urlEntitlementRepository.findByGroupIdAndUrlUrlAndUrlMethod(groupId, url, method));
		return false;
	}

}
