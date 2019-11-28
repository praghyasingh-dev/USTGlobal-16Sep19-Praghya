package com.ustglobal.curdoperationwithhibernate;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.curdoperationwithhibernate.manytoone.Pencil;
import com.ustglobal.curdoperationwithhibernate.manytoone.PencilBox;


public class TestManyToOne {
	
	public static void main(String[] args) {
		
		PencilBox pBox = new PencilBox();
		pBox.setBid(2);
		pBox.setBname("Girl");
		Pencil p = new Pencil();
		p.setPid(3);
		p.setColor("red");
		p.setPencilBox(pBox);
		
		Pencil p1 = new Pencil();
		p1.setPid(4);
		p1.setColor("green");
		p1.setPencilBox(pBox);



		EntityManager entityManager = null;
		EntityTransaction entityTransaction=null;
		try {
			EntityManagerFactory entityManagerFactory  = Persistence.createEntityManagerFactory("TestPersistence");
			entityManager = entityManagerFactory.createEntityManager();
			entityTransaction = entityManager.getTransaction();
			entityTransaction.begin();
			entityManager.persist(p);
			entityManager.persist(p1);
		    
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
