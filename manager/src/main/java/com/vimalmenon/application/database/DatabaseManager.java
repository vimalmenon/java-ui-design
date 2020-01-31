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
import com.vimalmenon.application.enums.Sql;

@Service
public class DatabaseManager {

	@Autowired 
	private ApplicationContext applicationContext;
	

	
	public List<String> uploadDatabase() throws RuntimeException{
		List<String> items = new ArrayList<String>();
		ObjectMapper mapper = new ObjectMapper();

		Sql.getSequence().forEach((file) -> {
			try {
				List result = ((JpaRepository) applicationContext.getBean(Class.forName(file.getClasses()))).findAll();
				items.add(mapper.writeValueAsString(result));
			} catch (BeansException | ClassNotFoundException | JsonProcessingException e) {
				throw new RuntimeException(e);
			}			
		});
		return items;
		
	}

}
