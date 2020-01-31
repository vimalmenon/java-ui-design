package com.vimalmenon.application.data.database.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.vimalmenon.application.data.database.UserDatabase;

public interface UserDatabaseRepository extends JpaRepository<UserDatabase, Integer>{

	
}
