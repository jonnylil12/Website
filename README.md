# User Interaction Site

Simple project that showcases full stack development 

## This project was generated with
- [Angular](https://angular.io/)
- [Springboot](https://start.spring.io/)
- [MySQL](https://dev.mysql.com/downloads/)
 
 
## Getting Setup 
1. In Powershell run command `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`  
3. In terminal run command  `npm install -g @angular/cli` 
4. In terminal run command `npm install --save-dev @angular-devkit/build-angular` 
5. Download and install [MySQL Server](https://dev.mysql.com/downloads/) 


## Starting Application
- For frontend on port **localhost:4200**  run command `ng serve --open`
- For backend on port **localhost:8080**   execute program `...\Website\src\main\java\com\example\website\App.java`
- For database on port **localhost:3306**  start MySQL server


 ## Notes
 **strict=false** in tsconfig.json.
 
 Schema is located in `...\Website\database\storageDB`.
 You must point MySQL to that datasource.
 
 1. stop MySQL service
 2. go to C:\ProgramData\MySQL\MySQL Server 8.0
 3. search for **datadir** in the my.ini file
 4. change pointer to ...\Website\database




### Starting MySQL Server for Windows Users
    1. "windowskey" + "R" 
    2. enter **services.msc**
    3. search for MySQLxx
    4. click on it and start service 

 
