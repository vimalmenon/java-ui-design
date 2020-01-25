package com.vimalmenon.application.data.group;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupRepository extends JpaRepository<Group, Integer>{

	public Optional<Group> findByName(String name);
	
	public Optional<List<Group>> findByPriorityGreaterThanEqual(int priority);
}
