package com.vimalmenon.application.controller.api.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.model.youtube.YoutubeScriptModel;
import com.vimalmenon.application.service.controller.YoutubeSciptService;

@RestController
@RequestMapping("/api/admin/youtube_script")
public class YouTubeScriptController {

	@Autowired
	private Session session;
	
	@Autowired
	private YoutubeSciptService youtubeSciptService;
	
	@GetMapping("")
	public ApiResponseModel<List<YoutubeScriptModel>> getScripts()
	{
		return new ApiResponseModel<List<YoutubeScriptModel>>(session).setData(youtubeSciptService.getScripts());
	}
	
	@PostMapping("")
	public ApiResponseModel<List<YoutubeScriptModel>> SaveScripts(@RequestBody List<YoutubeScriptModel> youtubeScripts)
	{
		return new ApiResponseModel<List<YoutubeScriptModel>>(session).setData(youtubeSciptService.SaveScripts(youtubeScripts));
	}
	
	@DeleteMapping("")
	public ApiResponseModel<List<YoutubeScriptModel>> deleteScript (@RequestBody YoutubeScriptModel youtubeScript)
	{
		return new ApiResponseModel<List<YoutubeScriptModel>>(session).setData(youtubeSciptService.deleteScript(youtubeScript));
	}
}
