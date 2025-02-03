package com.ecommerce.ecommerce_app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
	
	@PostMapping("/saveUser")
	public String saveUser(@RequestBody User user) {
		userservice.saveUser(user);
		return "New User has been Registred";
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> loginUser(@RequestBody User user) {
	    boolean isAuthenticated = userservice.getUserByEmail(user.getEmail(),user.getPassword());
	    
	    if (isAuthenticated) {
	        return ResponseEntity.ok("Login successful");
	    } else {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
	    }
	}
	
}
	
	

