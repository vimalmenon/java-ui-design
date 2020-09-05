package com.vimalmenon.application.service.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.component.ComponentEntitlement;
import com.vimalmenon.application.data.tutorial.Tutorial;
import com.vimalmenon.application.manager.database.ComponentManager;
import com.vimalmenon.application.manager.database.LinkManager;
import com.vimalmenon.application.manager.database.TutorialManager;
import com.vimalmenon.application.model.component.ComponentEntitlementModel;
import com.vimalmenon.application.model.response.Session;

@Service
public class ControllerService {

	@Autowired
	private ComponentManager componentManager;

	@Autowired
	private Session session;

	@Autowired
	private LinkManager linkManager;

	@Autowired
	private TutorialManager tutorialManager;

	public ComponentEntitlementModel getComponentEntitlement(String name) {
		Optional<ComponentEntitlement> entitlementOption = componentManager.checkEntitlement(session.getId(), name);
		if (entitlementOption.isPresent()) {
			return new ComponentEntitlementModel(entitlementOption.get());
		}
		return new ComponentEntitlementModel();

	}

	public Map<String, Object> getIndex() {
		Map<String, Object> index = new HashMap<>();
		index.put("socialMedias", linkManager.getSocialMedias());
		return index;
	}

	public List<String> getTutorials() {
		return new ArrayList<>();
	}

	public Map<String, Object> getAboutMe()
	{
		Optional<Tutorial> tutorial = tutorialManager.getAboutMeVideos();
		Map<String, Object> aboutMe = new HashMap<>();
		if (tutorial.isPresent()) {
			aboutMe.put("videoLink", tutorial.get().getYoutubeId());
		}
		return aboutMe;
	}
}
