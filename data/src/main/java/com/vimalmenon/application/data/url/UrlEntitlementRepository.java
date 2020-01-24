package com.vimalmenon.application.data.url;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UrlEntitlementRepository extends JpaRepository<UrlEntitlement, Integer> {

}
