package com.vimalmenon.application.service.url;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.common.helper.Helper;
import com.vimalmenon.application.data.url.UrlEntitlement;
import com.vimalmenon.application.manager.database.UrlManager;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.model.url.UrlEntitlementModel;

@Service
public class UrlEntitlementService {

	@Autowired
	private Session session;
	
	@Autowired
	private UrlManager urlManager;
	
	public boolean hasAccess(String url, String method) 
	{
		Optional<UrlEntitlement> urlEntitlementOptional = urlManager.getEntitlementByGroupIdUrlMethod(session.getId(), Helper.urlFixer(url), method);
		if (urlEntitlementOptional.isPresent()) {
			return new UrlEntitlementModel(urlEntitlementOptional.get()).isAccess();
		}
		return false;
	}
	
}
