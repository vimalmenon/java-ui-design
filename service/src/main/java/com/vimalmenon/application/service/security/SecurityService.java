package com.vimalmenon.application.service.security;

import com.vimalmenon.application.manager.database.UrlManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Service;

@Service
public class SecurityService {

    @Autowired
    private UrlManager urlManager;
   
	public void configureRoute(HttpSecurity http, AccessDeniedHandler authenticationFailureHandler) throws Exception {
        http
            .authorizeRequests()
            //.antMatchers("/api/admin/*").hasAnyAuthority("admin")
            .anyRequest().permitAll()
            .and()
            .csrf().disable()
            .formLogin().disable()
            .httpBasic().disable();
	}
}