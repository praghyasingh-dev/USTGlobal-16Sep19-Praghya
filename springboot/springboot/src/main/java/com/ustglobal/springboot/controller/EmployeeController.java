package com.ustglobal.springboot.controller;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ustglobal.springboot.dto.EmployeeBean;
import com.ustglobal.springboot.dto.EmployeeResponse;
import com.ustglobal.springboot.service.EmployeeService;
@RestController
public class EmployeeController {

	@Autowired
	private EmployeeService service;


	@PostMapping(path="/add",consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)

	public  EmployeeResponse addEmployee(@RequestBody EmployeeBean bean)
	{
		EmployeeResponse response = new EmployeeResponse();
		if(service.addEmployee(bean))
		{
			response.setStatusCode(201);             //successs
			response.setMessage("Success");
			response.setDiscription("data added to the DB");
		}
		else {
			response.setStatusCode(401);             //Failure
			response.setMessage("Failure");
			response.setDiscription("data not  added to the DB");

		}
		return response;
	}
	//***************************************end of add*******************************************************




	@PutMapping(path="/modify",consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public EmployeeResponse modifyEmployee(@RequestBody EmployeeBean bean)
	{
		EmployeeResponse response = new EmployeeResponse();
		if(service.modifyEmployee(bean))
		{
			response.setStatusCode(201);             //successs
			response.setMessage("Success");
			response.setDiscription("data modify to the DB");	
		}
		else {
			response.setStatusCode(401);             //Failure
			response.setMessage("Failure");
			response.setDiscription("data not  modify to the DB");

		}
		return response;
	}
	//***************************************end of modify*******************************************************




	@DeleteMapping(path="/delete/{id}",produces=MediaType.APPLICATION_JSON_VALUE)
	public EmployeeResponse deleteEmployee(@PathVariable("id")int id)
	{
		EmployeeResponse response = new EmployeeResponse();
		if(service.deleteEmployee(id))
		{
			response.setStatusCode(201);             //successs
			response.setMessage("Success");
			response.setDiscription("data deleted to the DB");	
		}
		else {
			response.setStatusCode(401);             //Failure
			response.setMessage("Failure");
			response.setDiscription("data not deleted  modify to the DB");

		}
		return response;

	}
	//***************************************end of delete*******************************************************




	@GetMapping(path="/get",produces=MediaType.APPLICATION_JSON_VALUE)
	public EmployeeResponse getEmployee (@RequestParam("id")int id) 
	{
		EmployeeResponse response = new EmployeeResponse();
		EmployeeBean bean = service.getEmployee(id);
		if(bean!=null) 
		{
			response.setStatusCode(201);             //successs
			response.setMessage("Success");
			response.setDiscription("data found the DB");	
			response.setEmployeeBean(Arrays.asList(bean));

		}
		else {
			response.setStatusCode(401);             //Failure
			response.setMessage("Failure");
			response.setDiscription("data not found in the DB");

		}

		return response;

	}
	//***************************************end of get employee*******************************************************



	@GetMapping(path="/get-all",produces=MediaType.APPLICATION_JSON_VALUE)
	public EmployeeResponse getAllEmployee () 
	{
		EmployeeResponse response = new EmployeeResponse();
		List<EmployeeBean> bean = service.getAllEmployee();
		if(!bean.isEmpty()) 
		{
			response.setStatusCode(201);             
			response.setMessage("Success");
			response.setDiscription("data found the DB");	
			response.setEmployeeBean(bean);

		}
		else {
			response.setStatusCode(401);             //Failure
			response.setMessage("Failure");
			response.setDiscription("data not found in the DB");

		}
		return response;

	}
	//***************************************end of getAllEmployee*******************************************************
	
	
	@GetMapping(path="/exce", produces=MediaType.APPLICATION_JSON_VALUE)
	public void createException() {
		int i= 1/0;
		
	}

}
