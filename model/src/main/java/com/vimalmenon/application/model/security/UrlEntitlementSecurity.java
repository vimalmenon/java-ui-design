package com.vimalmenon.application.model.security;

import java.util.ArrayList;
import java.util.List;

public class UrlEntitlementSecurity {

    private String url;
    private String role;
    private String method;
    private List<String> roles = new ArrayList<>();

    public UrlEntitlementSecurity() {
    }

    public UrlEntitlementSecurity(String url, String method, String role) {
        this.url = url;
        this.method = method;
        this.role = role;
        this.roles.add(role);
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public List<String> getRoles() {
        return roles;
    }
    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
    public void addRoles(String role) {
        roles.add(role);
    }
    
}