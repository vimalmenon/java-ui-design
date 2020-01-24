package com.vimalmenon.application.service.url;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.model.response.Response;
import com.vimalmenon.application.model.response.Session;

@Service
public class UrlEntitlementService {

	@Autowired
	private Response response;

	@Autowired
	private Session session;
	
	public boolean checkEntitlement(String url, String method) {
		return false;
	}
	
}
