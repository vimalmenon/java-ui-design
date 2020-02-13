package com.vimalmenon.application.controller.api.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vimalmenon.application.model.group.GroupModel;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.controller.GroupService;

@RestController
@RequestMapping("/api/admin/group")
public class GroupController {

	@Autowired
	private Session session;
	
	
	@Autowired
	private GroupService groupService;
	
	@GetMapping("")
	public ApiResponseModel<List<GroupModel>> getGroups ()
	{
		return new ApiResponseModel<List<GroupModel>>(session).setData(groupService.getGroups());
	}
	
	@PostMapping("")
	public String saveGroups (@RequestBody List<GroupModel> groups)
	{
		return "vimalmenon";
	}
	
	@DeleteMapping("")
	public String deleteGroups (@RequestBody List<GroupModel> groups)
	{
		return "vimalmenon";
	}
}
