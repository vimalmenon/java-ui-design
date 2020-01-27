package com.vimalmenon.application.data.navigation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NavigationEntitlementRepository extends JpaRepository<NavigationEntitlement, Integer>{

}
