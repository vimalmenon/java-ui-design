package com.vimalmenon.application.data.link;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LinkRepository extends JpaRepository<Link, Integer>{

    public Optional<List<Link>> findByType(String type);

}
