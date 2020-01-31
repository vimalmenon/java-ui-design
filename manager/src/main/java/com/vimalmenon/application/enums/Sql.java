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
import com.vimalmenon.application.data.database.repository.UserDatabaseRepository;


public enum Sql {

	GROUPS("Groups", GroupRepository.class.getName()),
	USERS("Users", UserDatabaseRepository.class.getName()),
	USER_PREFERENCES("user_preferences", UserPreferenceRepository.class.getName()),
	NOTES("notes", NoteRepository.class.getName()),
	URLS("urls", UrlRepository.class.getName()),
	URL_ENTITLEMENTS("url_entitlements", UrlEntitlementRepository.class.getName()),
	COMPONENTS("components", ComponentRepository.class.getName()),
	COMPONENT_ENTITLEMENTS("component_entitlements", ComponentEntitlementRepository.class.getName()),
	NAVIGATIONS("navigations", NavigationRepository.class.getName()),
	NAVIGATION_ENTITLEMENTS("navigation_entitlements", NavigationEntitlementRepository.class.getName()),
	USER_PROFILES("user_profiles", UserProfileRepository.class.getName());
	
	
	
	private static List<Sql> sequence= Arrays.asList(
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
	private String classes;
	
	
	
	private Sql(String name, String classes) {
		this.sqlName = name;
		this.classes = classes;
	}
	
	public String getSqlName() {
		return sqlName;
	}

	public void setSqlName(String sqlName) {
		this.sqlName = sqlName;
	}

	public String getClasses() {
		return classes;
	}

	public void setClasses(String classes) {
		this.classes = classes;
	}

	public static List<Sql> getSequence() {
		return sequence;
	}

	public static void setSequence(List<Sql> sequence) {
		Sql.sequence = sequence;
	}
	
}
