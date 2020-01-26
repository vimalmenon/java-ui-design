package com.vimalmenon.application.controller.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.vimalmenon.application.model.notes.NoteModel;
import com.vimalmenon.application.model.response.ApiResponseModel;
import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.controller.NoteService;

@RestController
@RequestMapping("/api/admin/notes")
public class NoteController {

	@Autowired
	private Session session;
	
	
	
	@Autowired
	private NoteService notesService;
	
	@GetMapping("")
	public ApiResponseModel<List<NoteModel>> getNotes ()
	{
		return new ApiResponseModel<List<NoteModel>>(session).setData(notesService.getNotes());
	}
	
	@PostMapping("")
	public ApiResponseModel<List<NoteModel>>  saveNotes (@RequestBody List<NoteModel> notes)
	{
		return new ApiResponseModel<List<NoteModel>>(session).setData(notesService.saveNotes(notes));
	}
	
	@DeleteMapping("")
	public ApiResponseModel<List<NoteModel>> deleteNotes (@RequestBody List<NoteModel> notes)
	{
		return new ApiResponseModel<List<NoteModel>>(session).setData(notesService.deleteNotes(notes));
		
	}
	
}
