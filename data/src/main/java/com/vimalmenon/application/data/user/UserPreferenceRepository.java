package com.vimalmenon.application.data.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserPreferenceRepository extends JpaRepository<UserPreference, Integer>{

	public Optional<UserPreference> findByUserId(Integer userId);
}
