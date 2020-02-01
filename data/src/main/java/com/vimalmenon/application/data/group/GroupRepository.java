package com.vimalmenon.application.data.group;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface GroupRepository extends JpaRepository<Group, Integer>{

	public Optional<Group> findByName(String name);
	
	public Optional<List<Group>> findByPriorityGreaterThanEqual(int priority);
	
	@Modifying
	@Transactional
	@Query(value = "SET SQL_SAFE_UPDATES = 0;",nativeQuery = true)
	public void unset();
	
	@Modifying
	@Transactional
	@Query(value = "SET FOREIGN_KEY_CHECKS=0;",nativeQuery = true)
	public void unsetConstrain();
	
}
