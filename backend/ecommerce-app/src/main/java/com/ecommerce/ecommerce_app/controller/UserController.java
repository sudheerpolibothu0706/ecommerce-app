package com.ecommerce.ecommerce_app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.ecommerce_app.model.User;
import com.ecommerce.ecommerce_app.service.UserService;




@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userservice;
	
	@PostMapping("/regestration")
	public ResponseEntity<String> saveUser(@RequestBody User user) {
		
		return userservice.saveUser(user);
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> loginUser(@RequestBody User user) {
		
		 return userservice.loginUser(user.getEmail(), user.getPassword());
		
	    
	}
}
	
	