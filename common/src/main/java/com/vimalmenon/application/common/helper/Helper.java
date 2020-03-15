package com.vimalmenon.application.common.helper;

import org.mindrot.jbcrypt.BCrypt;

public class Helper {
	
	private static final String salt = BCrypt.gensalt(12);
	

	public static String urlFixer (String url)
	{
		if (url.endsWith("/")) {
			return url.substring(0, url.length() - 1);
		}
		return url;
	}
	public static boolean verifyPassword (String candidate, String passwordToVerify) 
	{
		return BCrypt.checkpw(candidate, passwordToVerify);
	}
	public static String createPassword (String password) 
	{
		return BCrypt.hashpw(password, salt);
	}
}
