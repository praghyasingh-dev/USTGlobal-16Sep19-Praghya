package com.ustglobal.curdoperationpractise;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.curdoperationpractise.dto.Employee;

public class Insert {
	public static void main(String[] args) {
		
		
		Employee employee = new Employee();
		employee.setEid(1);
		employee.setEname("ram");
		employee.setSalary(20000);
		
		EntityManager entityManager = null;
		EntityTransaction entityTransaction = null;
		try {
		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence");
		entityManager = entityManagerFactory.createEntityManager();
		entityTransaction = entityManager.getTransaction();
		entityTransaction.begin();
		entityManager.persist(employee);
		System.out.println("insert is done");
		entityTransaction.commit();
		entityManager.close();
		}
		catch (Exception e) {
			e.printStackTrace();
			entityTransaction.rollback();
		}
	}

}
