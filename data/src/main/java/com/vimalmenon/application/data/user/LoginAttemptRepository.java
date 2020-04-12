package com.vimalmenon.application.data.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginAttemptRepository extends JpaRepository<LoginAttempt, Integer>{

    public Optional<LoginAttempt> findByUserId(int userId);

}