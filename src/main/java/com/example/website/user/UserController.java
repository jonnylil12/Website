package com.example.website.user;

import org.springframework.beans.factory.annotation.Autowired;
/* import org.springframework.http.HttpStatus; */
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
/* 
    @GetMapping("/api/user/test") 
    public ResponseEntity<Object> test(){
       return new ResponseEntity<>("{\"message\", \"api works\"}"
                                    ,HttpStatus.OK);
    }  */

    @GetMapping("/api/user")
    public ResponseEntity<Object> getUsers() {
        return this.userserviceObj.getUsers();

    }

    @PostMapping("/api/user")
    public ResponseEntity<Object> setUser(@RequestBody User userModel) {
        return this.userserviceObj.setUsers( userModel);

    }

}