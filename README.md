# Interaction Site

Simple project that showcases full stack


## Getting Setup 

- Installing tools

 1. In Powershell run command `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`  
 3. In terminal run command  `npm install -g @angular/cli` 
 4. In terminal run command `npm install --save-dev @angular-devkit/build-angular` 
 5. Use MySQL installer to download [MySQL Server](https://dev.mysql.com/downloads/) 

- redirect MySQL datasource.

 1. stop MySQL service
 2. edit the permissions for ...\Website\database add NETWORK SERVICE and full control
 3. go to C:\ProgramData\MySQL\MySQL Server 8.0
 4. search for **datadir** in the my.ini file
 5. change pointer to ...\Website\database




## Starting Application
- frontend on port **localhost:4200**  run command `ng serve --open`
- backend on port **localhost:8080**   execute program `...\Website\src\main\java\com\example\website\App.java`
- database on port **localhost:3306**  start MySQL server 




## Starting MySQL Server for Windows Users
    1. "windowskey" + "R" 
    2. enter **services.msc**
    3. search for MySQLxx
    4. click on it and start service or stop it
    


### Further Help
---
- [Angular](https://angular.io/)
- [Springboot](https://start.spring.io/)
- [MySQL](https://dev.mysql.com/downloads/)
 
 
 
