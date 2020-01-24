package com.vimalmenon.application.data.userpreference;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserPreferenceRepository extends JpaRepository<UserPreference, Integer>{

}
