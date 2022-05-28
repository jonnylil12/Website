package com.example.website.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity @Table(name = "user")
public class User {
    @Id  @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String username;
    private String password;
    private String email;
    private int age;


    public User() {}

    public User(String name,
                     String username,
                     String password,
                     String email,
                     int age) {

        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.age = age;


    }


    public User(int id,
                     String name,
                     String username,
                     String password,
                     String email,
                     int age) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.age = age;

    }


    public int getId() {
        return this.id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }


    public String getUsername() {
        return this.username;
    }
    public void setUsername(String username) {
        this.username = username;

    }

    public String getPassword() {
        return this.password;
    }
    public void setDob(String password) {
        this.password = password;

    }

    public String getEmail() {
        return this.email;
    }
    public void setEmail(String email) {
        this.email = email;

    }


    public int getAge() {
        return this.age;
    }
    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return  "{"
                 + "id=" + id
                 + ",name='" + name + '\''
                 + ",username='" + username + '\''
                 + ",password='" + password + '\''
                 + ",email='" + email + '\''
                 + ",age=" + age +
                '}'; 
    }
}






