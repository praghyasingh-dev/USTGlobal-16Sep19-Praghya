package com.ustglobal.springboot.repo;

import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.ustglobal.springboot.dto.EmployeeBean;


public interface EmployeeRepo 
extends JpaRepository<EmployeeBean, Integer>

{
       @Transactional
       @Modifying
	//other than select
	@Query("update EmployeeBean set name=:name, password=:password, gender=:gender, doj=:doj where id=:id")
	public void update(String name, String password, String gender, Date doj, int id);
       
       
       //you can use this search by name
       //@Query("from EmployeeBean where name=:name")
       //public EmployeeBean findByName(String name);
       
       
       //you can use this delete by name
       //@Query("from EmployeeBean where name=:name")
      // public void deleteByName(String name);

}
