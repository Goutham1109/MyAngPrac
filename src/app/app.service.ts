import { Injectable  } from '@angular/core';  
 
 @Injectable()
 export class appService {  
    getApp(): any { 
       return sessionStorage.getItem("app"); 
    } 
  //  JSON.parse(sessionStorage.app_u)[0].password
    
 } 