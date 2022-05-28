# User Interaction Site

Simple project that showcases full stack development 

## This project was generated with
- [Angular](https://angular.io/)
- [Springboot](https://start.spring.io/)
- [MySQL](https://dev.mysql.com/downloads/)

## Getting Setup 
1. run command  `npm install -g @angular/cli` 
2. run command `npm install --save-dev @angular-devkit/build-angular`
3. Install MySQL Server on computer

## Starting Application
- For frontend on **localhost:4200**   run command `ng serve --open`
- For backend on **localhost:8080**   execute \Website\src\main\java.com.example\website\App.java\App.java 
- For database on **localhost:3306**  start MySQL server

 ## Notes
 - **strict=false** in tsconfig.json 
 - Schema is located in \Website\database\storageDB To access it you must point MySQL server to that datasource
     1. stop MySQL service
     2. go to C:\ProgramData\MySQL\MySQL Server 8.0
     3. search for **datadir** in the my.ini file
     4. change pointer to ...\Website\database


### Starting MySQL Server for Windows Users
    1. "windowskey" + "R" 
    2. enter **services.msc**
    3. search for MySQLxx
    4. click on it and start service 

 
