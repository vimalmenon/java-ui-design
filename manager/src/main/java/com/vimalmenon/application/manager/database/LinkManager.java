package com.vimalmenon.application.manager.database;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.link.Link;
import com.vimalmenon.application.data.link.LinkRepository;

@Service
public class LinkManager {

	private static final String SOCIAL_MEDIA = "SOCIAL_MEDIA";

	@Autowired
	private LinkRepository linkRepository;

	public List<Link> getLink() {
		return linkRepository.findAll();
	}

	public void saveLinks(List<Link> items) {
		linkRepository.saveAll(items);
	}

	public void deleteLinks(List<Link> items) {
		linkRepository.deleteAll(items);
	}

	public List<Link> getSocialMedias() {
		return linkRepository.findByType(SOCIAL_MEDIA);
	}
}
