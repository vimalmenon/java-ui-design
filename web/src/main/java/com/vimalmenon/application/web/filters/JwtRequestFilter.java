package com.vimalmenon.application.web.filters;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.vimalmenon.application.model.response.Session;
import com.vimalmenon.application.service.admin.AdminService;
import com.vimalmenon.application.service.security.JWTUtility;
import com.vimalmenon.application.service.security.MyUserDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    
    @Autowired
    private AdminService adminService;
    
    @Autowired
    private JWTUtility jwtUtility;

    @Autowired
    private MyUserDetailsService myUserDetailsService;

    @Autowired
    private Session session;

    private void setSessionByUserName (String username) 
    {
        if (!adminService.setSessionForUsername(username)) {
            adminService.setSessionForDefault();
        }
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException 
    {
        
        final String requestTokenHeader = request.getHeader("Authorization");
        String username = null;
        String jwtToken = null;

        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
            try {
                username = jwtUtility.getUsernameFromToken(jwtToken);
            } catch (IllegalArgumentException e) {
                session.setFlush(true);
                logger.error("Unable to get JWT Token");
            } catch (ExpiredJwtException e) {
                session.setFlush(true);
                logger.error("JWT Token has expired");
            }
        } else {
            adminService.setSessionForDefault();
            logger.warn("JWT Token does not begin with Bearer String");
        }
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = myUserDetailsService.loadUserByUsername(username);
            if (Boolean.TRUE.equals(jwtUtility.validateToken(jwtToken, userDetails))) {
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                setSessionByUserName(userDetails.getUsername());
            } else {
                adminService.setSessionForDefault();
            }
            
        } else {
            adminService.setSessionForDefault();
        }
        filterChain.doFilter(request, response);
    }

}