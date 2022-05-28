package com.example.website.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.*;

/* import java.util.Hashtable; */

@Service
public class UserService {
/* 
    Hashtable<Integer, User> all_students = new Hashtable<>();

    private int newid = 0; */

    private UserRepository userrepositoryObj;

    @Autowired
    public UserService(UserRepository userrepositoryObj){
        this.userrepositoryObj = userrepositoryObj;
    }



    public ResponseEntity<Object> getUsers() {

        ArrayList<User> all = (ArrayList<User>)userrepositoryObj.findAll();

        return new ResponseEntity<>(all,HttpStatus.OK);
       /*      all_students.values() */
    }


    public ResponseEntity<Object> setUsers(User userModel) {

  /*       userModel.setId(newid);
        all_students.put(newid, userModel);
        this.newid += 1; */
       /*  this.userRepository.


 */     userrepositoryObj.save(userModel);
        return new ResponseEntity<>("{\"message\":\"Resource successfully created\"}",
                                    HttpStatus.CREATED);
       
                                    
    }



}
