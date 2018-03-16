import { Component, OnInit } from '@angular/core';
import { appService } from '../app.service';
import{Router} from '@angular/router';
import { enableDebugTools } from '@angular/platform-browser/src/browser/tools/tools';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css'],
  providers:[appService]
})
export class RemoveComponent implements OnInit {
  del: boolean = true;
  
 public name
  public array:any=[]
  // info:{
  //   name:'',
  //   email:'',
  //   password:''
  // }[]=[];

  constructor(private service: appService,private route: Router) { }

  ngOnInit() {
    
    }
  delete(){
    this.del=false;
    //console.log(this.array.length); this.info=this.service.getApp();
    //var namer = sessionStorage.getItem("app_u");
    
    var entereddata = JSON.parse(sessionStorage.app);
  for(let i=0;i<entereddata.length;i++){
    //if(JSON.parse(sessionStorage.app_u)[i].username==this.name){
      
     if(entereddata[i].username==this.name){ 
     debugger;
       console.log(i);
    entereddata.splice(i,1);  
    entereddata
    console.log("Success");
   console.log(entereddata)
    
   sessionStorage.removeItem("app");
       //sessionStorage.app_u=JSON.stringify(entereddata);
    //  sessionStorage.setItem("app",JSON.stringify(entereddata));
       alert("removed successfully");
    }     
  }
     sessionStorage.app=JSON.stringify(entereddata);
  }

 back(){
 this.route.navigateByUrl('/first');
 }
}

  

