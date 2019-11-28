package com.ustglobal.curdoperationpractise;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.curdoperationpractise.dto.Employee;

public class Update {
	public static void main(String[] args) {
		
		EntityManager entityManager = null;
		EntityTransaction entityTransaction = null;
		try {
		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence");
	    entityManager = entityManagerFactory.createEntityManager();
	    entityTransaction = entityManager.getTransaction();	
	    entityTransaction.begin();
	    
	    Employee employee = entityManager.find(Employee.class, 1);
	    employee.setEname("rohan");
	    System.out.println("updated ...");
		
		entityTransaction.commit();
		}
		catch (Exception e) {
			e.printStackTrace();
			entityManager.close();
		}
	}

}
