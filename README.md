 ![alt logo](https://github.com/jonnylil12/Website/blob/master/client/src/assets/output-onlinepngtools.png) 
 # Interactive Site 

- Simple project that showcases full stack


## Getting Setup 

- **Installing tools**
 1. In Powershell run command `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`  
 2. In terminal run command  `npm install -g @angular/cli` 
 3. In terminal run command `npm install --save-dev @angular-devkit/build-angular` 
 4. Download [Springboot Cli](https://repo.spring.io/release/org/springframework/boot/spring-boot-cli/2.7.0/spring-boot-cli-2.7.0-bin.zip) and add *spring (version)\bin* to your PATH 
 5. Download [MySQL Server](https://dev.mysql.com/downloads/) 


- **Redirect MySQL datasource**

 1. stop MySQL service
 2. go to *...\Website\src\Data* 
 3. set security permissions of the folder to  (user = **NETWORK SERVICE** , control = **full control**)
 4. go to *C:\ProgramData\MySQL\MySQL Server 8.0*
 5. set **datadir** of the my.ini file to `datadir=...\Website\src\Data`



## Starting Application
1. In terminal run command `ng serve --open`  
2. In terminal run command  `spring run ...\Website\src\main\java\com\example\website\App.java`
3. Press "windowskey" + "R" and enter **services.msc**
4. search for MySQL80 service
5. right click and start MySQL server
    
 Navigate in your browser **localhost:4200** 

### Further Help
---
- [Angular](https://angular.io/)
- [Springboot](https://start.spring.io/)
- [MySQL](https://dev.mysql.com/downloads/)
 
 
 
