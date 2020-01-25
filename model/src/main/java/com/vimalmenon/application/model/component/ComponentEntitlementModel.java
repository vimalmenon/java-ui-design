package com.vimalmenon.application.model.component;

import com.vimalmenon.application.data.component.ComponentEntitlement;

public class ComponentEntitlementModel {
	
	private boolean write;
	private boolean read;
	
	public ComponentEntitlementModel(ComponentEntitlement entitlement) {
		setWrite(entitlement.getWriteAccess() == 1 ? true : false);
		setRead(entitlement.getReadAccess() == 1 ? true : false);
	}
	public boolean isWrite() {
		return write;
	}
	public void setWrite(boolean write) {
		this.write = write;
	}
	public boolean isRead() {
		return read;
	}
	public void setRead(boolean read) {
		this.read = read;
	}
	
	

}
