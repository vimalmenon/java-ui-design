package com.vimalmenon.application.common.helper;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Helper {

	private static Logger log = LoggerFactory.getLogger(Helper.class);

	private Helper() {
	}

	private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

	public static boolean verifyPassword(String candidate, String passwordToVerify) {
		return encoder.matches(candidate, passwordToVerify);
	}

	public static String createPassword(String password) {
		return encoder.encode(password);
	}

	public static JsonNode convertToJSON(String data){
		ObjectMapper mapper = new ObjectMapper();
		try {
			return mapper.readTree(data);
		} catch (JsonProcessingException e) {
			log.error("Exception : ", e);
		}
		return null;
	}
}
