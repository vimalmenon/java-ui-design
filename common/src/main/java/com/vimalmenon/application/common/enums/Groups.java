package com.vimalmenon.application.common.enums;

public enum Groups {
	SUPER_ADMIN("Super Admin"),
	VISITOR("Visitor"),
	NO_USER("No User");
	
	public final String name;
	
	private Groups(String name) {
		this.name= name;
	}
}
