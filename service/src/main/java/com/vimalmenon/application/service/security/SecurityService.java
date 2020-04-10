package com.vimalmenon.application.service.security;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Service;

@Service
public class SecurityService {

	public void configureRoute(HttpSecurity http, AccessDeniedHandler authenticationFailureHandler) throws Exception {
        http
            .authorizeRequests()
            .anyRequest()
            .permitAll()    
            .and()
            .csrf().disable()
            .formLogin();
            System.out.println("this is vimal menon");
	}
}