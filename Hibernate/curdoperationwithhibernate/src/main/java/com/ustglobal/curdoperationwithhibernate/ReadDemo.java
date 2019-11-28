package com.ustglobal.curdoperationwithhibernate;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.ustglobal.curdoperationwithhibernate.dto.Product;

public class ReadDemo {
	public static void main(String[] args) {

		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence");
		EntityManager entityManager = entityManagerFactory.createEntityManager();
		Product product = entityManager.find(Product.class, 101);   
		System.out.println("ID:"+product.getPid());
		System.out.println("NAME:"+product.getPname());
		System.out.println("Quantity:"+product.getQuantity());
		entityManager.close();
	}//end of main
}//end of ReadDemo
