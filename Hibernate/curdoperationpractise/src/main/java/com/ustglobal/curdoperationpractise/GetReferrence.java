package com.ustglobal.curdoperationpractise;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.ustglobal.curdoperationpractise.dto.Employee;

public class GetReferrence {
	public static void main(String[] args) {
		EntityManager entityManager = null;
		EntityManagerFactory entityManagerFactory =null;
		
	    entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence");
		entityManager = entityManagerFactory.createEntityManager();
		
		
		Employee employee = entityManager.getReference(Employee.class,1);
		System.out.println("id:"+employee.getEid());
		System.out.println("name:"+employee.getEname());
		System.out.println("salary:"+employee.getSalary());
		
		entityManager.close();
	}

}
