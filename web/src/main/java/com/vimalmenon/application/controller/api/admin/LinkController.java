package com.vimalmenon.application.controller.api.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.model.link.LinkModel;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.controller.LinkService;

@RestController
@RequestMapping("/api/admin/link")
public class LinkController {

	@Autowired
	private Session session;
	
	@Autowired
	private LinkService linkService;
	

	@GetMapping("")
	public ApiResponseModel<List<LinkModel>> getLink () {
		return new ApiResponseModel<List<LinkModel>>(session).setData(linkService.getLink());
	}
	
	@PostMapping("")
	public ApiResponseModel<List<LinkModel>> postLinks (@RequestBody List<LinkModel> models) {
		return new ApiResponseModel<List<LinkModel>>(session).setData(linkService.postLinks(models));
	}
	
	@DeleteMapping("")
	public ApiResponseModel<List<LinkModel>> deleteLinks (@RequestBody List<LinkModel> models) {
		return new ApiResponseModel<List<LinkModel>>(session).setData(linkService.deleteLinks(models));
	}
	
}
