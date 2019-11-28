package com.ustglobal.curdoperationwithhibernate;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.curdoperationwithhibernate.dto.Product;

public class UpadteDemo {
	public static void main(String[] args) {
		EntityManager entityManager = null;
		EntityTransaction entityTransaction = null;
		try {
		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence");
		entityManager = entityManagerFactory.createEntityManager();
		entityTransaction = entityManager.getTransaction();
		entityTransaction.begin();
		
		Product product = entityManager.find(Product.class, 101);
		product.setPname("mobile");
		System.out.println("Update Record");
		entityTransaction.commit();
	}
		catch (Exception e) {
			e.printStackTrace();
			entityTransaction.rollback();
		}
		entityManager.close();
	}//end of main

}//end of update demo
