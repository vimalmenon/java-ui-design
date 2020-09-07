package com.vimalmenon.application.data.component;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComponentEntitlementRepository extends JpaRepository<ComponentEntitlement, Integer> {
	
	public Optional<ComponentEntitlement> findByGroupIdAndComponentName(Integer groupId, String name);
	
}
