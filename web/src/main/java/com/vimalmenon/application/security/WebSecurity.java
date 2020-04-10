package com.vimalmenon.application.security;

import com.vimalmenon.application.service.security.SecurityService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.access.AccessDeniedHandler;

@Configuration
@EnableWebSecurity
public class WebSecurity extends WebSecurityConfigurerAdapter {

    @Autowired
    private SecurityService securityService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {     
        securityService.configureRoute(http, authenticationFailureHandler());
    }

    @Bean
    public AccessDeniedHandler authenticationFailureHandler()
    {
        return new RestAuthenticationFailureHandler();
    }

}

