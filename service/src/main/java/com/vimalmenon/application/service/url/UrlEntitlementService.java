package com.vimalmenon.application.service.url;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.manager.database.UrlManager;
import com.vimalmenon.application.model.url.UrlModel;

@Service
public class UrlEntitlementService {
	
	@Autowired
	private UrlManager urlManager;

	public List<UrlModel> getUrls() {
		List<UrlModel> items = new ArrayList<>();
		urlManager.getUrls().forEach(url -> items.add(new UrlModel(url)));
		return items;
	}
	
}
