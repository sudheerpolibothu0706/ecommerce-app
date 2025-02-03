package com.ecommerce.ecommerce_app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.ecommerce_app.model.User;
import com.ecommerce.ecommerce_app.repository.UserRepository;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Save a new user
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // Get user by email
    public boolean getUserByEmail(String email, String password) {
        Optional<User> user = userRepository.findById(email); 
        
        if (user.isPresent()) {
        	User userdata=user.get();
            return userdata.getPassword().equals(password);
            		
        } else {
            throw new RuntimeException("User with email " + email + " not found");
        }
    }
}
