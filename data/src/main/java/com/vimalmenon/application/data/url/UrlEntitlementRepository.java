package com.vimalmenon.application.data.url;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UrlEntitlementRepository extends JpaRepository<UrlEntitlement, Integer> {

	public Optional<UrlEntitlement> findByGroupIdAndUrlUrlDataAndUrlMethod(Integer groupId, String urlUrlData, String urlMethod);

}
