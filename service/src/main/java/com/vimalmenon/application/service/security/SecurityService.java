package com.vimalmenon.application.service.security;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.vimalmenon.application.manager.database.GroupManager;
import com.vimalmenon.application.manager.database.UrlManager;
import com.vimalmenon.application.model.security.UrlEntitlementSecurity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.ExpressionUrlAuthorizationConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Service;

@Service
public class SecurityService {

    @Autowired
    private UrlManager urlManager;

    @Autowired
    private GroupManager groupManager;

    private Map<Integer, String> getGroupMap () 
    {
        Map<Integer, String> groupMap = new HashMap<>();
        groupManager.getGroups().forEach((group) -> {
            groupMap.put(group.getId(), group.getName());
        });
        return groupMap;
    }

    private List<UrlEntitlementSecurity> getUrlEntitlementList() {
        Map<Integer, String> groupMap = getGroupMap();

        List<UrlEntitlementSecurity> urlEntitlements = new ArrayList<>();
        
        urlManager.getUrlEntitlementRepository().forEach((urlEntitlement) -> {
            urlEntitlements.add(new UrlEntitlementSecurity(urlEntitlement.getUrl().getUrl(), urlEntitlement.getUrl().getMethod(), groupMap.get(urlEntitlement.getGroupId())));
        });
        return urlEntitlements;
    }

    public void configureRoute(HttpSecurity http, AccessDeniedHandler accessDeniedHandler, AuthenticationEntryPoint authenticationEntryPoint) throws Exception {
        List<UrlEntitlementSecurity> urlEntitlements = getUrlEntitlementList();

        ExpressionUrlAuthorizationConfigurer<HttpSecurity>.ExpressionInterceptUrlRegistry authorize = http.authorizeRequests();

        for(UrlEntitlementSecurity urlEntitlement: urlEntitlements) {
            if (urlEntitlement.getMethod().equals("ALL")) {
                authorize = authorize.antMatchers(urlEntitlement.getUrl()).hasAuthority(urlEntitlement.getRole());
            } else {
                authorize = authorize.antMatchers(urlEntitlement.getMethod(), urlEntitlement.getUrl()).hasAnyRole(urlEntitlement.getRole());
            }
        }
        authorize
            .anyRequest().permitAll()
            .and()
            .csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .formLogin().disable()
            .httpBasic().disable()
            .exceptionHandling().accessDeniedHandler(accessDeniedHandler).authenticationEntryPoint(authenticationEntryPoint);
        
	}
}