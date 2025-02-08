package com.ecommerce.ecommerce_app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ecommerce.ecommerce_app.model.User;
import com.ecommerce.ecommerce_app.repository.UserRepository;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    

    private final Key secretKey = Keys.hmacShaKeyFor("poiuythjgbnmvfrtdbncvzxdertsefgqawserdcxzvbfgbnm".getBytes());

    //  Register a new user
    public ResponseEntity<String> saveUser(User user) {
        String useremail = user.getEmail();
        Optional<User> optionalUser = userRepository.findById(useremail);

        if (optionalUser.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User with the same email already exists");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return ResponseEntity.ok("Registration Successful");
    }

    //  Login user with email and password
    public ResponseEntity<String> loginUser(String email, String password) {
        Optional<User> userOptional = userRepository.findById(email);

        if (userOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User details not found");
        }

        User user = userOptional.get();

        if (!passwordEncoder.matches(password, user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect password");
        }

        
        String token = generateToken(email);

        
        return ResponseEntity.ok("Login Successful. Token: " + token);
    }

    
    private String generateToken(String email) {
        return Jwts.builder()
                .subject(email)  
                .issuedAt(new Date())  
                .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) 
                .signWith(secretKey)  
                .compact();
    }
}
