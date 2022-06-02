 ![alt logo](https://github.com/jonnylil12/Website/blob/master/src/assets/output-onlinepngtools.png) 
 # Interactive Site 

- Simple project that showcases full stack


## Getting Setup 

- **Installing tools**

 1. Download [Node.js](https://nodejs.org/en/download/) and [JDK](https://www.oracle.com/java/technologies/downloads/#java18)
 2. In powershell run command `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`  and "Yes"
 3. In terminal run command  `npm install -g @angular/cli` 
 4. Download [Maven Cli](https://maven.apache.org/download.cgi) and add **apache-maven-(version)\bin** to your PATH 
 5. Download [MySQL Server](https://dev.mysql.com/downloads/) 


- **MySQL datasource**
 1. Stop MySQL Service (see Starting Application)
 2. replace folder `C:\ProgramData\MySQL\MySQL Server 8.0\Data` with `...\Website\src\Data`


## Starting Application
1. Press **windowskey** + **R** and enter **services.msc**
2. Search for **MySQL80** service
3. Right click and start or stop MySQL service
4. In Project terminal run command  `mvn spring-boot:run`
5. In Project terminal run command `ng serve --open` 

 

### Further Help
---
- [Angular](https://angular.io/)
- [Springboot](https://start.spring.io/)
- [MySQL](https://dev.mysql.com/downloads/)
 
 
 
