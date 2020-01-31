package com.vimalmenon.application.model.navigation;

import com.vimalmenon.application.data.navigation.NavigationEntitlement;

public class NavigationModel {

	public String name;
	public boolean access;
	
	public NavigationModel(NavigationEntitlement navigation) 
	{
		setName(navigation.getNavigation().getName());
		setAccess(navigation.getAccess() ==1 ? true: false);
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isAccess() {
		return access;
	}
	public void setAccess(boolean access) {
		this.access = access;
	}
	
	
	
}
