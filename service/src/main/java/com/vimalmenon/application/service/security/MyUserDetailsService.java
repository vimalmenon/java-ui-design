package com.vimalmenon.application.service.security;

import java.util.Optional;

import com.vimalmenon.application.data.user.User;
import com.vimalmenon.application.manager.UserGroupAdminManager;
import com.vimalmenon.application.model.security.CustomUserDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserGroupAdminManager userGroupAdminManager;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userGroupAdminManager.login(username);
        System.out.println(username);
        if (user.isPresent()) {
            return new CustomUserDetails(user.get());
        } else {
            throw new UsernameNotFoundException("Invalid username or password");
        }
    }

}