package com.vimalmenon.application.common.helper;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Helper {
	
	private static final String salt = BCrypt.gensalt(12);
	private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

	public static String urlFixer(String url) {
		if (url.endsWith("/")) {
			return url.substring(0, url.length() - 1);
		}
		return url;
	}

	public static boolean verifyPassword(String candidate, String passwordToVerify) {
		return encoder.matches(candidate, passwordToVerify);
		//return BCrypt.checkpw(candidate, passwordToVerify);
	}

	public static String createPassword(String password) {
		return encoder.encode(password);
		//return BCrypt.hashpw(password, salt);
	}
}
