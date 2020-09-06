package com.vimalmenon.application.service.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.youtube.YoutubeScript;
import com.vimalmenon.application.manager.database.YouTubeScriptManager;
import com.vimalmenon.application.model.youtube.YoutubeScriptModel;

@Service
public class YoutubeSciptService {

	
	@Autowired
	private YouTubeScriptManager youTubeScriptManager;

	public List<YoutubeScriptModel> getScripts() {
		List<YoutubeScriptModel> items = new ArrayList<>();
		for(YoutubeScript script :youTubeScriptManager.getScripts()) {
			YoutubeScriptModel data= new YoutubeScriptModel();
			data.setId(script.getId());
			data.setHeading(script.getHeading());
			data.setNote(script.getNote());
			data.setSequence(script.getSequence());
			items.add(data);
		}
		return items;
	}

	public List<YoutubeScriptModel> saveScripts(List<YoutubeScriptModel> youtubeScripts) {
		List<YoutubeScript> items = new ArrayList<>();
		for(YoutubeScriptModel script: youtubeScripts) {
			YoutubeScript data = new YoutubeScript();
			data.setId(script.getId());
			data.setHeading(script.getHeading());
			data.setNote(script.getNote());
			data.setSequence(script.getSequence());
			items.add(data);
		}
		youTubeScriptManager.SaveScripts(items);
		return getScripts();
	}

	public List<YoutubeScriptModel> deleteScript(YoutubeScriptModel youtubeScript) {
		YoutubeScript data = new YoutubeScript();
		data.setId(youtubeScript.getId());
		data.setHeading(youtubeScript.getHeading());
		data.setNote(youtubeScript.getNote());
		data.setSequence(youtubeScript.getSequence());
		youTubeScriptManager.deleteScript(data);
		return getScripts();
	}
	
	
	
}
