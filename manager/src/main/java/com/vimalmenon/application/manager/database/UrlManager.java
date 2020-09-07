package com.vimalmenon.application.manager.database;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.url.Url;
import com.vimalmenon.application.data.url.UrlEntitlement;
import com.vimalmenon.application.data.url.UrlEntitlementRepository;
import com.vimalmenon.application.data.url.UrlRepository;

@Service
public class UrlManager {
	
	@Autowired
	private UrlEntitlementRepository urlEntitlementRepository;
	
	@Autowired
	private UrlRepository urlRepository;
	
	public Optional<UrlEntitlement> getEntitlementByGroupIdUrlMethod (int groupId, String url,String method) 
	{
		return urlEntitlementRepository.findByGroupIdAndUrlUrlDataAndUrlMethod(groupId, url, method);
	}

	public List<Url> getUrls() {
		return urlRepository.findAll();
	}

	public List<UrlEntitlement> getUrlEntitlementRepository() {
		return urlEntitlementRepository.findAll();
	}

}
