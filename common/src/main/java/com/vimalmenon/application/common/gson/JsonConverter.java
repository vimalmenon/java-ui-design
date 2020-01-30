package com.vimalmenon.application.common.gson;

import org.springframework.stereotype.Service;

import com.google.gson.Gson;

@Service
public class JsonConverter {
	
	private Gson gson;
	public JsonConverter() {
		gson = new Gson();
		//gson.toJson(1);          
	}
	public Gson getGson() {
		return gson;
	}
}
