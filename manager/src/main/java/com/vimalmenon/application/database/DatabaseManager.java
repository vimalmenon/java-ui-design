package com.vimalmenon.application.database;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.vimalmenon.application.common.gson.JsonConverter;
import com.vimalmenon.application.enums.Sql;

@Service
public class DatabaseManager {

	@Autowired 
	private ApplicationContext applicationContext;
	
	@Autowired
	private JsonConverter jsonConverter;
	
	public Map<String, String> uploadDatabase() {
		Map<String, String> items = new HashMap<String, String>();
		Sql.getSequence().forEach((file) -> {
			//System.out.println(file.getSqlName());
			try {
				List result = ((JpaRepository) applicationContext.getBean(Class.forName(file.getClasses()))).findAll();
				items.put(file.getSqlName(), "test");
			} catch (BeansException | ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		});
		return items;
		
	}

}
