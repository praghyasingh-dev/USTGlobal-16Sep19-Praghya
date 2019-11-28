package com.ustglobal.curdoperationwithhibernate;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.curdoperationwithhibernate.dto.Product;

public class InsertDemo {
	public static void main(String[] args) {
		
		Product product = new Product();
		product.setPid(104);
		product.setPname("rubber");
		product.setQuantity(4);
		
		EntityManager entityManager = null;
		EntityTransaction entityTransaction=null;
		try {
		EntityManagerFactory entityManagerFactory  = Persistence.createEntityManagerFactory("TestPersistence");
		entityManager = entityManagerFactory.createEntityManager();
		entityTransaction = entityManager.getTransaction();
		entityTransaction.begin();
		entityManager.persist(product);
		System.out.println("Record Saved");
		entityTransaction.commit();
		entityManager.close();
		}
		catch(Exception e){
			e.printStackTrace();
			entityTransaction.rollback();
			
		}
		
	}

}
