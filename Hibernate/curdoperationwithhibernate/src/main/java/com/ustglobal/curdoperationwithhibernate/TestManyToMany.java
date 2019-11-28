package com.ustglobal.curdoperationwithhibernate;

import java.util.ArrayList;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.curdoperationwithhibernate.manytomany.Course;
import com.ustglobal.curdoperationwithhibernate.manytomany.Student;

public class TestManyToMany {
	public static void main(String[] args) {
		
	
	EntityManager entityManager = null;
	EntityTransaction entityTransaction=null;
	
	Course course1 = new Course();
	course1.setCid(10);
	course1.setCname("java");
	
	Course course2= new Course();
	course2.setCid(20);
	course2.setCname("sql");
	ArrayList<Course> alCourse = new ArrayList<Course>();
	alCourse.add(course1);
	alCourse.add(course2);
	
	Student student = new Student();
	student.setSid(3);
	student.setSname("sita");
	student.setCourse(alCourse);
	
	
	
	try {
		EntityManagerFactory entityManagerFactory  = Persistence.createEntityManagerFactory("TestPersistence");
		entityManager = entityManagerFactory.createEntityManager();
		entityTransaction = entityManager.getTransaction();
		entityTransaction.begin();
		entityManager.persist(student);
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
