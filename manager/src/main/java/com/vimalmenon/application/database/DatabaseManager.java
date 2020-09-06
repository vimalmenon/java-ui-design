package com.vimalmenon.application.database;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import com.vimalmenon.application.data.group.GroupRepository;
import com.vimalmenon.application.enums.Sql;

@Service
public class DatabaseManager {

	@Autowired 
	private ApplicationContext applicationContext;
	
	@Autowired
	private GroupRepository groupRepository;
	

	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public List<String> uploadDatabase(){
		List<String> items = new ArrayList<>();
		ObjectMapper mapper = new ObjectMapper();
		Sql.getSequence().forEach(file -> {
			try {
				items.add(mapper.writeValueAsString(((JpaRepository) applicationContext.getBean(file.getClasses())).findAll()));
			} catch (BeansException | JsonProcessingException e) {
				throw new RuntimeException(e);
			}			
		});
		return items;
		
	}
	public void unset () {
		groupRepository.unset();
		groupRepository.unsetConstrain();
	}
	
	public void set () {
		groupRepository.set();
		groupRepository.setConstrain();
	}
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void restoreDatabase (Sql item, String string) throws JsonProcessingException {
		
		((JpaRepository)applicationContext.getBean(item.getClasses())).deleteAll();
		((JpaRepository)applicationContext.getBean(item.getClasses())).flush();
		ObjectMapper mapper = new ObjectMapper();
		TypeFactory typeFactory = mapper.getTypeFactory();
		((JpaRepository) applicationContext.getBean(item.getClasses())).saveAll(mapper.readValue(string, typeFactory.constructCollectionType(List.class, item.getEntityName())));
	}

}
