package com.vimalmenon.application.service.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.link.Link;
import com.vimalmenon.application.manager.database.LinkManager;
import com.vimalmenon.application.model.link.LinkModel;

@Service
public class LinkService {

	@Autowired
	private LinkManager linkManager;

	public List<LinkModel> getLink() {
		List<LinkModel> items = new ArrayList<>();
		linkManager.getLink().forEach(link -> {
			LinkModel model = new LinkModel();
			model.setId(link.getId());
			model.setName(link.getName());
			model.setTitle(link.getTitle());
			model.setUrl(link.getUrl());
			model.setType(link.getType());
			model.setActive(link.getIsActive()==1?true:false);
			items.add(model);
		});
		return items;
	}

	public List<LinkModel> postLinks(List<LinkModel> models) {
		List<Link> items = new ArrayList<>();
		models.forEach(model -> {
			Link link = new Link();
			link.setId(model.getId());
			link.setName(model.getName());
			link.setTitle(model.getTitle());
			link.setUrl(model.getUrl());
			link.setType(model.getType());
			link.setIsActive(model.isActive()?1:0);
			items.add(link);
		});
		linkManager.saveLinks(items);
		return getLink();
		
	}

	public List<LinkModel> deleteLinks(List<LinkModel> models) {
		List<Link> items = new ArrayList<>();
		models.forEach(model -> {
			Link link = new Link();
			link.setId(model.getId());
			link.setName(model.getName());
			link.setTitle(model.getTitle());
			link.setUrl(model.getUrl());
			link.setType(model.getType());
			link.setIsActive(model.isActive()?1:0);
			items.add(link);
		});
		linkManager.deleteLinks(items);
		return getLink();
	}
}
