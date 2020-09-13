package com.vimalmenon.application.service.security;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import com.vimalmenon.application.data.url.UrlEntitlement;
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

    private Map<Integer, String> getGroupMap() {
        Map<Integer, String> groupMap = new HashMap<>();
        groupManager.getGroups().forEach(group -> groupMap.put(group.getId(), group.getName()));
        return groupMap;
    }

    private List<UrlEntitlementSecurity> getUrlEntitlementList() {
        Map<Integer, String> groupMap = getGroupMap();
        Map<String, UrlEntitlementSecurity> urlMapper = new HashMap<>();

        LinkedList<UrlEntitlementSecurity> urlEntitlements = new LinkedList<>();

        List<UrlEntitlement> urlEntitlementsRepo = urlManager.getUrlEntitlementRepository();
        urlEntitlementsRepo.forEach(urlEntitlement -> {
            if (urlMapper.get(urlEntitlement.getUrl().getUrlData()+"|"+urlEntitlement.getUrl().getMethod()) != null) {
                urlMapper.get(urlEntitlement.getUrl().getUrlData()+"|"+urlEntitlement.getUrl().getMethod()).addRoles(groupMap.get(urlEntitlement.getGroupId()));
            } else {
                urlMapper.put(urlEntitlement.getUrl().getUrlData()+"|"+urlEntitlement.getUrl().getMethod(), new UrlEntitlementSecurity(urlEntitlement.getUrl().getUrlData(), urlEntitlement.getUrl().getMethod(), groupMap.get(urlEntitlement.getGroupId())));
            }
        });
        urlMapper.keySet().forEach(url -> {
            if(urlMapper.get(url).getMethod().equals("ALL")){
                urlEntitlements.addLast(urlMapper.get(url));
            } else {
                urlEntitlements.addFirst(urlMapper.get(url));
            }
        });
        return urlEntitlements;
    }

    public void configureRoute(HttpSecurity http, AccessDeniedHandler accessDeniedHandler, AuthenticationEntryPoint authenticationEntryPoint) throws Exception {
        List<UrlEntitlementSecurity> urlEntitlements = getUrlEntitlementList();

        ExpressionUrlAuthorizationConfigurer<HttpSecurity>.ExpressionInterceptUrlRegistry authorize = http.authorizeRequests();

        for(UrlEntitlementSecurity urlEntitlement: urlEntitlements) {
            if (urlEntitlement.getMethod().equals("ALL")) {
                authorize = authorize.antMatchers(urlEntitlement.getUrl()).hasAnyAuthority(urlEntitlement.getRoles().toArray(String[]::new));
            } else {
                authorize = authorize.antMatchers(urlEntitlement.getMethod(), urlEntitlement.getUrl()).hasAnyAuthority(urlEntitlement.getRoles().toArray(String[]::new));
            }
        }
        authorize
            .anyRequest().permitAll()
            .and()
            .oauth2Login()
            .and()
            .csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .formLogin().disable()
            .httpBasic().disable()
            .exceptionHandling()
            .accessDeniedHandler(accessDeniedHandler)
            .authenticationEntryPoint(authenticationEntryPoint);
        
	}
}