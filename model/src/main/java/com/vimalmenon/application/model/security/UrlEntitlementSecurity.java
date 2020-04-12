package com.vimalmenon.application.model.security;

public class UrlEntitlementSecurity {

    private String url;
    private String role;
    private String method;

    public UrlEntitlementSecurity() {
    }

    public UrlEntitlementSecurity(String url, String method, String role) {
        this.url = url;
        this.method = method;
        this.role = role;
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
    
}