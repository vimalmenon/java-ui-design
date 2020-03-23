package com.vimalmenon.application.enums;

import java.util.Arrays;
import java.util.List;

import com.vimalmenon.application.data.component.Component;
import com.vimalmenon.application.data.component.ComponentEntitlement;
import com.vimalmenon.application.data.component.ComponentEntitlementRepository;
import com.vimalmenon.application.data.component.ComponentRepository;
import com.vimalmenon.application.data.contacts.Contact;
import com.vimalmenon.application.data.contacts.ContactRepository;
import com.vimalmenon.application.data.device.DevicePreference;
import com.vimalmenon.application.data.device.DevicePreferenceRepository;
import com.vimalmenon.application.data.group.Group;
import com.vimalmenon.application.data.group.GroupRepository;
import com.vimalmenon.application.data.navigation.Navigation;
import com.vimalmenon.application.data.navigation.NavigationEntitlement;
import com.vimalmenon.application.data.navigation.NavigationEntitlementRepository;
import com.vimalmenon.application.data.navigation.NavigationRepository;
import com.vimalmenon.application.data.note.Note;
import com.vimalmenon.application.data.note.NoteRepository;
import com.vimalmenon.application.data.properties.Property;
import com.vimalmenon.application.data.properties.PropertyRepository;
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
import com.vimalmenon.application.data.youtube.YoutubeScript;
import com.vimalmenon.application.data.youtube.YoutubeScriptRepository;


public enum Sql {

	GROUPS("groups", GroupRepository.class, Group.class),
	USERS("users", UserRepository.class, User.class),
	USER_PREFERENCES("user_preferences", UserPreferenceRepository.class, UserPreference.class),
	NOTES("notes", NoteRepository.class, Note.class),
	URLS("urls", UrlRepository.class, Url.class),
	URL_ENTITLEMENTS("url_entitlements", UrlEntitlementRepository.class, UrlEntitlement.class),
	COMPONENTS("components", ComponentRepository.class, Component.class),
	COMPONENT_ENTITLEMENTS("component_entitlements", ComponentEntitlementRepository.class, ComponentEntitlement.class),
	NAVIGATIONS("navigations", NavigationRepository.class, Navigation.class),
	NAVIGATION_ENTITLEMENTS("navigation_entitlements", NavigationEntitlementRepository.class, NavigationEntitlement.class),
	USER_PROFILES("user_profiles", UserProfileRepository.class, UserProfile.class),
	YOUTUBE_SCRIPTS("youtube_scripts", YoutubeScriptRepository.class, YoutubeScript.class),
	CONTACTS("contacts", ContactRepository.class, Contact.class),
	PROPERTIES("properties", PropertyRepository.class ,Property.class),
	DEVICE_PREFERENCE("device_preferences", DevicePreferenceRepository.class, DevicePreference.class);
	
	
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
		USER_PROFILES,
		YOUTUBE_SCRIPTS,
		CONTACTS,
		PROPERTIES,
		DEVICE_PREFERENCE
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
