package com.example.website.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

/* import java.util.Hashtable; */

@Service
public class UserService {

    private UserRepository userrepositoryObj;

    @Autowired
    public UserService(UserRepository userrepositoryObj){
        this.userrepositoryObj = userrepositoryObj;
    }



    public ArrayList<User> getUsers() {
        return (ArrayList<User>)userrepositoryObj.findAll();
      
    }


    public void setUsers(User userModel) {
         userrepositoryObj.save(userModel);


                                    
    }



}
