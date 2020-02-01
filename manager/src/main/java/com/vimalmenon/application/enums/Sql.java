package com.vimalmenon.application.enums;

import java.util.Arrays;
import java.util.List;

import com.vimalmenon.application.data.component.Component;
import com.vimalmenon.application.data.component.ComponentEntitlement;
import com.vimalmenon.application.data.component.ComponentEntitlementRepository;
import com.vimalmenon.application.data.component.ComponentRepository;
import com.vimalmenon.application.data.group.Group;
import com.vimalmenon.application.data.group.GroupRepository;
import com.vimalmenon.application.data.navigation.Navigation;
import com.vimalmenon.application.data.navigation.NavigationEntitlement;
import com.vimalmenon.application.data.navigation.NavigationEntitlementRepository;
import com.vimalmenon.application.data.navigation.NavigationRepository;
import com.vimalmenon.application.data.note.Note;
import com.vimalmenon.application.data.note.NoteRepository;
import com.vimalmenon.application.data.url.Url;
import com.vimalmenon.application.data.url.UrlEntitlement;
import com.vimalmenon.application.data.url.UrlEntitlementRepository;
import com.vimalmenon.application.data.url.UrlRepository;
import com.vimalmenon.application.data.user.User;
import com.vimalmenon.application.data.user.UserPreference;
import com.vimalmenon.application.data.user.UserPreferenceRepository;
import com.vimalmenon.application.data.user.UserProfile;
import com.vimalmenon.application.data.user.UserProfileRepository;
import com.vimalmenon.application.data.user.UserRepository;


public enum Sql {

	GROUPS("Groups", GroupRepository.class, Group.class),
	USERS("Users", UserRepository.class, User.class),
	USER_PREFERENCES("user_preferences", UserPreferenceRepository.class, UserPreference.class),
	NOTES("notes", NoteRepository.class, Note.class),
	URLS("urls", UrlRepository.class, Url.class),
	URL_ENTITLEMENTS("url_entitlements", UrlEntitlementRepository.class, UrlEntitlement.class),
	COMPONENTS("components", ComponentRepository.class, Component.class),
	COMPONENT_ENTITLEMENTS("component_entitlements", ComponentEntitlementRepository.class, ComponentEntitlement.class),
	NAVIGATIONS("navigations", NavigationRepository.class, Navigation.class),
	NAVIGATION_ENTITLEMENTS("navigation_entitlements", NavigationEntitlementRepository.class, NavigationEntitlement.class),
	USER_PROFILES("user_profiles", UserProfileRepository.class, UserProfile.class);
	
	
	
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
	@SuppressWarnings("rawtypes")
	private Class classes;
	@SuppressWarnings("rawtypes")
	private Class entityName;
	
	@SuppressWarnings("rawtypes")
	private Sql(String name, Class classes, Class entityName) {
		this.sqlName = name;
		this.classes = classes;
		this.entityName = entityName;
	}
	
	
	
	public String getSqlName() {
		return sqlName;
	}

	public void setSqlName(String sqlName) {
		this.sqlName = sqlName;
	}

	@SuppressWarnings("rawtypes")
	public Class getClasses() {
		return classes;
	}

	@SuppressWarnings("rawtypes")
	public void setClasses(Class classes) {
		this.classes = classes;
	}

	public static List<Sql> getSequence() {
		return sequence;
	}

	public static void setSequence(List<Sql> sequence) {
		Sql.sequence = sequence;
	}
	@SuppressWarnings("rawtypes")
	public Class getEntityName() {
		return entityName;
	}
	@SuppressWarnings("rawtypes")
	public void setEntityName(Class entityName) {
		this.entityName = entityName;
	}
	
}
