# Interactive Site
![alt text](https://github.com/jonnylil12/Website/blob/master/client/src/assets/output-onlinepngtools.png)

- Simple project that showcases full stack


## Getting Setup 

- **Installing tools**

 1. In Powershell run command `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`  
 3. In terminal run command  `npm install -g @angular/cli` 
 4. In terminal run command `npm install --save-dev @angular-devkit/build-angular` 
 5. Use MySQL installer to download [MySQL Server](https://dev.mysql.com/downloads/) 

- **Redirect MySQL datasource**

 1. stop MySQL service
 2. edit the security permissions add **NETWORK SERVICE** to list of users and *full control*
 3. go to *C:\ProgramData\MySQL\MySQL Server 8.0*
 4. search for **datadir=** in the my.ini file
 5. change pointer to `...\Website\database`



## Starting Application
1. In terminal run command `ng serve --open`  
2. execute *...\Website\src\main\java\com\example\website\App.java*
3. Press "windowskey" + "R" and enter **services.msc**
4. search for MySQL80 service
5. right click and start MySQL server
    
- Navigate in your browser **localhost:4200** 

### Further Help
---
- [Angular](https://angular.io/)
- [Springboot](https://start.spring.io/)
- [MySQL](https://dev.mysql.com/downloads/)
 
 
 
