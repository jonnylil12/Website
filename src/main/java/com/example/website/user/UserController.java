package com.example.website.user;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {



     private final UserService userserviceObj;

     @Autowired
     public UserController(UserService userserviceObj){
         this.userserviceObj = userserviceObj;

     }


    @GetMapping("/api/user")
    public ResponseEntity<ArrayList<User>> getUsers() {

        ArrayList<User> allusers = this.userserviceObj.getUsers();
     
        return new ResponseEntity<>(allusers,HttpStatus.OK);

    }

    @PostMapping("/api/user")
    public ResponseEntity<String> setUser(@RequestBody User userModel) {
        
        this.userserviceObj.setUsers(userModel);

        return new ResponseEntity<>("Resource successfully created",HttpStatus.CREATED);



    } 

} 