package com.vimalmenon.application.manager.database;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.data.youtube.YoutubeScript;
import com.vimalmenon.application.data.youtube.YoutubeScriptRepository;

@Service
public class YouTubeScriptManager {

	@Autowired
	private YoutubeScriptRepository youtubeScriptRepository;

	public List<YoutubeScript> getScripts() {
		return youtubeScriptRepository.findAll();		
	}

	public List<YoutubeScript> SaveScripts(List<YoutubeScript> items) {
		return youtubeScriptRepository.saveAll(items);
	}

	public void deleteScript(YoutubeScript data) {
		youtubeScriptRepository.delete(data);;
		
	}
}
