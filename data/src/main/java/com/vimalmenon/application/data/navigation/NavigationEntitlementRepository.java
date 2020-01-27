package com.vimalmenon.application.data.navigation;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NavigationEntitlementRepository extends JpaRepository<NavigationEntitlement, Integer>{
	
	public Optional<List<NavigationEntitlement>> findByGroupId(int groupId);

}
