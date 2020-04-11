package com.vimalmenon.application.service.security;

import com.vimalmenon.application.service.admin.AdminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private AdminService adminService;
   
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println(username + "this is security");
        System.out.println(username + "this is security");
        System.out.println(username + "this is security");
        System.out.println(username + "this is security");
        // TODO Auto-generated method stub
        return null;
    }

}