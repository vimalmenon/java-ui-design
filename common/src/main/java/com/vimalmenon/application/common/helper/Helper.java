package com.vimalmenon.application.common.helper;

public class Helper {

	public static String urlFixer (String url)
	{
		if (url.endsWith("/")) {
			return url.substring(0, url.length() - 1);
		}
		return url;
	}
}
