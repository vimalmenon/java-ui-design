package com.vimalmenon.application.enums;

import java.util.Arrays;
import java.util.List;

import com.vimalmenon.application.data.component.ComponentEntitlementRepository;
import com.vimalmenon.application.data.component.ComponentRepository;
import com.vimalmenon.application.data.group.GroupRepository;
import com.vimalmenon.application.data.navigation.NavigationEntitlementRepository;
import com.vimalmenon.application.data.navigation.NavigationRepository;
import com.vimalmenon.application.data.note.NoteRepository;
import com.vimalmenon.application.data.url.UrlEntitlementRepository;
import com.vimalmenon.application.data.url.UrlRepository;
import com.vimalmenon.application.data.user.UserPreferenceRepository;
import com.vimalmenon.application.data.user.UserProfileRepository;
import com.vimalmenon.application.data.user.UserRepository;


public enum Sql {

	GROUPS("Groups", GroupRepository.class),
	USERS("Users", UserRepository.class),
	USER_PREFERENCES("user_preferences", UserPreferenceRepository.class),
	NOTES("notes", NoteRepository.class),
	URLS("urls", UrlRepository.class),
	URL_ENTITLEMENTS("url_entitlements", UrlEntitlementRepository.class),
	COMPONENTS("components", ComponentRepository.class),
	COMPONENT_ENTITLEMENTS("component_entitlements", ComponentEntitlementRepository.class),
	NAVIGATIONS("navigations", NavigationRepository.class),
	NAVIGATION_ENTITLEMENTS("navigation_entitlements", NavigationEntitlementRepository.class),
	USER_PROFILES("user_profiles", UserProfileRepository.class);
	
	
	
	public static List<Sql> sequence= Arrays.asList(
				GROUPS, 
				USERS, 
				USER_PREFERENCES, 
				NOTES, 
				URLS, 
				URL_ENTITLEMENTS,
				COMPONENTS,
				COMPONENT_ENTITLEMENTS,
				NAVIGATIONS,
				NAVIGATION_ENTITLEMENTS,
				USER_PROFILES
	);
	
	
	private String sqlName;
	private Class<?> classes;
	
	private Sql(String name, Class<?> classes) {
		this.sqlName = name;
		this.classes = classes;
	}
	
	public String getSqlName() {
		return sqlName;
	}

	public void setSqlName(String sqlName) {
		this.sqlName = sqlName;
	}

	public Class<?> getClasses() {
		return classes;
	}

	public void setClasses(Class<?> classes) {
		this.classes = classes;
	}
	
	
}
